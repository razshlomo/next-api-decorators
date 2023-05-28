"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleException = void 0;
const decorators_1 = require("../decorators");
const exceptions_1 = require("../exceptions");
function getExceptionHandlers(target, propertyKey) {
    var _a;
    const definedExceptionHandler = (_a = Reflect.getMetadata(decorators_1.CATCH_TOKEN, target.constructor, propertyKey)) !== null && _a !== void 0 ? _a : Reflect.getMetadata(decorators_1.CATCH_TOKEN, target.constructor);
    return definedExceptionHandler;
}
function defaultExceptionHandler(exception, res) {
    var _a;
    const statusCode = exception instanceof exceptions_1.HttpException ? exception.statusCode : 500;
    const message = exception instanceof exceptions_1.HttpException ? exception.message : 'An unknown error occurred.';
    const errors = exception instanceof exceptions_1.HttpException && ((_a = exception.errors) === null || _a === void 0 ? void 0 : _a.length) ? exception.errors : [message];
    res.status(statusCode).json({
        statusCode,
        message,
        errors,
        stack: exception instanceof Error && process.env.NODE_ENV === 'development' ? exception.stack : undefined
    });
}
async function handleException(target, propertyKey, exception, req, res) {
    const exceptionHandlers = getExceptionHandlers(target, propertyKey);
    if (exceptionHandlers) {
        for (const exceptionHandler of exceptionHandlers) {
            if (exceptionHandler.exceptionType && exception instanceof exceptionHandler.exceptionType) {
                return exceptionHandler.handler.call(null, exception, req, res);
            }
            else if (!exceptionHandler.exceptionType) {
                return exceptionHandler.handler.call(null, exception, req, res);
            }
        }
    }
    return defaultExceptionHandler(exception, res);
}
exports.handleException = handleException;
