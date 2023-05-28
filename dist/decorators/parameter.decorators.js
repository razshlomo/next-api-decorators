"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createParamDecorator = exports.UploadedFiles = exports.UploadedFile = exports.Response = exports.Res = exports.Request = exports.Req = exports.Header = exports.Body = exports.Param = exports.Query = exports.PARAMETER_TOKEN = void 0;
exports.PARAMETER_TOKEN = Symbol('instant:next:parameters');
function addParameter(location, name, pipes, fn) {
    return function (target, propertyKey, parameterIndex) {
        var _a;
        const params = (_a = Reflect.getMetadata(exports.PARAMETER_TOKEN, target.constructor, propertyKey)) !== null && _a !== void 0 ? _a : [];
        params.push({ index: parameterIndex, location, name, pipes, fn });
        Reflect.defineMetadata(exports.PARAMETER_TOKEN, params, target.constructor, propertyKey);
    };
}
function Query(nameOrPipes, ...pipes) {
    if (typeof nameOrPipes === 'string') {
        return addParameter('query', nameOrPipes, pipes.length ? pipes : undefined);
    }
    else if (typeof nameOrPipes === 'function') {
        return addParameter('query', undefined, [nameOrPipes, ...pipes]);
    }
    else {
        return addParameter('query', undefined);
    }
}
exports.Query = Query;
function Param(name, ...pipes) {
    return addParameter('params', name, pipes);
}
exports.Param = Param;
function Body(...pipes) {
    return addParameter('body', undefined, pipes);
}
exports.Body = Body;
/**
 * Returns a parameter from the request header.
 *
 * @param name Parameter name
 */
function Header(name) {
    return addParameter('header', name);
}
exports.Header = Header;
/** Returns the `req` object. */
function Req() {
    return addParameter('request');
}
exports.Req = Req;
/** Returns the `req` object. */
function Request() {
    return Req();
}
exports.Request = Request;
/** Returns the `res` object. */
function Res() {
    return addParameter('response');
}
exports.Res = Res;
/** Returns the `res` object. */
function Response() {
    return Res();
}
exports.Response = Response;
function UploadedFile() {
    return addParameter('file');
}
exports.UploadedFile = UploadedFile;
function UploadedFiles() {
    return addParameter('files');
}
exports.UploadedFiles = UploadedFiles;
function createParamDecorator(fn) {
    return () => addParameter('custom', undefined, undefined, fn);
}
exports.createParamDecorator = createParamDecorator;
