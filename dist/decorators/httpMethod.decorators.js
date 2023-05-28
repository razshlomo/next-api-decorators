"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Patch = exports.Delete = exports.Put = exports.Post = exports.Get = exports.HTTP_METHOD_TOKEN = exports.HttpMethod = void 0;
const handler_1 = require("../internals/handler");
const loadPackage_1 = require("../internals/loadPackage");
var HttpMethod;
(function (HttpMethod) {
    HttpMethod["GET"] = "GET";
    HttpMethod["POST"] = "POST";
    HttpMethod["PUT"] = "PUT";
    HttpMethod["DELETE"] = "DELETE";
    HttpMethod["PATCH"] = "PATCH";
    HttpMethod["OPTIONS"] = "OPTIONS";
    HttpMethod["HEAD"] = "HEAD";
    HttpMethod["CONNECT"] = "CONNECT";
    HttpMethod["TRACE"] = "TRACE";
})(HttpMethod = exports.HttpMethod || (exports.HttpMethod = {}));
exports.HTTP_METHOD_TOKEN = Symbol('instant:next:httpMethod');
function applyHttpMethod({ method, path, options }) {
    if (process.env.NODE_ENV === 'development' && path !== '/') {
        loadPackage_1.loadPackage('path-to-regexp', {
            context: '@' + method.charAt(0).toUpperCase() + method.slice(1).toLowerCase(),
            docsUrl: 'https://next-api-decorators.vercel.app/docs/routing/route-matching'
        });
    }
    return function (target, propertyKey, descriptor) {
        var _a;
        const methods = (_a = Reflect.getMetadata(exports.HTTP_METHOD_TOKEN, target.constructor)) !== null && _a !== void 0 ? _a : [];
        methods.push({ path, method, options, propertyKey });
        Reflect.defineMetadata(exports.HTTP_METHOD_TOKEN, methods, target.constructor);
        return handler_1.applyHandler(target, propertyKey, descriptor);
    };
}
function getPath(pathOrOptions) {
    return typeof pathOrOptions === 'string' ? pathOrOptions : '/';
}
function getOptions(pathOrOptions, options) {
    return typeof pathOrOptions === 'object' ? pathOrOptions : options;
}
function Get(pathOrOptions, options) {
    return applyHttpMethod({
        method: HttpMethod.GET,
        path: getPath(pathOrOptions),
        options: getOptions(pathOrOptions, options)
    });
}
exports.Get = Get;
function Post(pathOrOptions, options) {
    return applyHttpMethod({
        method: HttpMethod.POST,
        path: getPath(pathOrOptions),
        options: getOptions(pathOrOptions, options)
    });
}
exports.Post = Post;
function Put(pathOrOptions, options) {
    return applyHttpMethod({
        method: HttpMethod.PUT,
        path: getPath(pathOrOptions),
        options: getOptions(pathOrOptions, options)
    });
}
exports.Put = Put;
function Delete(pathOrOptions, options) {
    return applyHttpMethod({
        method: HttpMethod.DELETE,
        path: getPath(pathOrOptions),
        options: getOptions(pathOrOptions, options)
    });
}
exports.Delete = Delete;
function Patch(pathOrOptions, options) {
    return applyHttpMethod({
        method: HttpMethod.PATCH,
        path: getPath(pathOrOptions),
        options: getOptions(pathOrOptions, options)
    });
}
exports.Patch = Patch;
