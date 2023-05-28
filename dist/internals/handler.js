"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyHandler = void 0;
const http_1 = require("http");
const stream_1 = require("stream");
const decorators_1 = require("../decorators");
const exceptionHandler_1 = require("./exceptionHandler");
const getParameterValue_1 = require("./getParameterValue");
const multerError_util_1 = require("./multerError.util");
function isResponseSent(res) {
    return res.writableEnded || res.finished;
}
async function runMiddlewares(middlewares, req, res, callback) {
    const executeMiddleware = async (req, res, index, next) => {
        if (isResponseSent(res)) {
            next(null);
            return;
        }
        if (index === middlewares.length) {
            // Base case: all middlewares have been executed
            next(null);
            return;
        }
        const middleware = middlewares[index];
        try {
            await middleware(req, res, async (err) => {
                if (err) {
                    // If an error occurs, stop execution and propagate the error back up the call stack
                    next(multerError_util_1.handleMulterError(err));
                }
                else {
                    // If no error occurs, execute the next middleware
                    await executeMiddleware(req, res, index + 1, next);
                }
            });
        }
        catch (err) {
            // If an error occurs, stop execution and propagate the error back up the call stack
            next(multerError_util_1.handleMulterError(err));
        }
    };
    // Start executing the first middleware
    await new Promise((resolve, reject) => {
        executeMiddleware(req, res, 0, (err) => {
            if (err) {
                // Handle any errors that occur during middleware execution
                reject(err);
            }
            else {
                // All middlewares have been executed successfully
                callback().then(resolve).catch(reject);
            }
        });
    });
}
async function runMainLayer(target, propertyKey, originalHandler, req, res) {
    var _a, _b;
    const httpCode = Reflect.getMetadata(decorators_1.HTTP_CODE_TOKEN, target.constructor, propertyKey);
    const parameterDecorators = ((_a = Reflect.getMetadata(decorators_1.PARAMETER_TOKEN, target.constructor, propertyKey)) !== null && _a !== void 0 ? _a : []).sort((a, b) => a.index - b.index);
    const classHeaders = Reflect.getMetadata(decorators_1.HEADER_TOKEN, target.constructor);
    const methodHeaders = Reflect.getMetadata(decorators_1.HEADER_TOKEN, target.constructor, propertyKey);
    const parameterTypes = Reflect.getMetadata('design:paramtypes', target, propertyKey);
    const isDownloadable = (_b = Reflect.getMetadata(decorators_1.HTTP_DOWNLOAD_TOKEN, target.constructor, propertyKey)) !== null && _b !== void 0 ? _b : false;
    const parameters = await Promise.all(parameterDecorators.map(async ({ location, name, pipes, index, fn }) => {
        if (location === 'custom') {
            return fn === null || fn === void 0 ? void 0 : fn.call(null, req);
        }
        const paramType = index < parameterTypes.length &&
            typeof parameterTypes[index] === 'function' &&
            /^class\s/.test(Function.prototype.toString.call(parameterTypes[index]))
            ? parameterTypes[index]
            : undefined;
        let returnValue = getParameterValue_1.getParameterValue(req, res, {
            location,
            name,
            index
        });
        if (pipes && pipes.length) {
            for (const pipeFn of pipes) {
                returnValue = pipeFn.name
                    ? // Bare pipe function. i.e: `ParseNumberPipe`
                        await pipeFn.call(null, null).call(null, returnValue, { name, metaType: paramType })
                    : // Pipe with options. i.e: `ParseNumberPipe({ nullable: false })`
                        await pipeFn.call(null, returnValue, {
                            name,
                            metaType: paramType
                        });
            }
        }
        return returnValue;
    }));
    classHeaders === null || classHeaders === void 0 ? void 0 : classHeaders.forEach((value, name) => res.setHeader(name, value));
    methodHeaders === null || methodHeaders === void 0 ? void 0 : methodHeaders.forEach((value, name) => res.setHeader(name, value));
    const returnValue = await originalHandler.call(this, ...parameters);
    if (returnValue instanceof http_1.ServerResponse || isResponseSent(res)) {
        return;
    }
    res.status(httpCode !== null && httpCode !== void 0 ? httpCode : (returnValue != null ? 200 : 204));
    if (returnValue instanceof stream_1.Stream) {
        returnValue.pipe(res);
    }
    else if (isDownloadable &&
        typeof returnValue === 'object' &&
        'filename' in returnValue &&
        'contents' in returnValue) {
        res.setHeader('Content-Disposition', `attachment; filename="${returnValue.filename}"`);
        if ('contentType' in returnValue) {
            res.setHeader('Content-Type', returnValue.contentType);
        }
        if (returnValue.contents instanceof stream_1.Stream) {
            returnValue.contents.pipe(res);
        }
        else {
            res.send(returnValue.contents);
        }
    }
    else {
        res.send(returnValue !== null && returnValue !== void 0 ? returnValue : null);
    }
}
function applyHandler(target, propertyKey, descriptor) {
    const originalHandler = descriptor.value;
    descriptor.value = async function (req, res) {
        const classMiddlewares = Reflect.getMetadata(decorators_1.MIDDLEWARE_TOKEN, target.constructor);
        const methodMiddlewares = Reflect.getMetadata(decorators_1.MIDDLEWARE_TOKEN, target.constructor, propertyKey);
        try {
            const runMainLayerWrapper = async () => {
                await runMainLayer.call(this, target, propertyKey, originalHandler, req, res);
            };
            await runMiddlewares.call(this, [...(classMiddlewares !== null && classMiddlewares !== void 0 ? classMiddlewares : []), ...(methodMiddlewares !== null && methodMiddlewares !== void 0 ? methodMiddlewares : [])], req, res, runMainLayerWrapper);
        }
        catch (err) {
            if (isResponseSent(res)) {
                return;
            }
            await exceptionHandler_1.handleException(target, propertyKey, err, req, res);
        }
    };
    return descriptor;
}
exports.applyHandler = applyHandler;
