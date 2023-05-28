"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpCode = exports.HTTP_CODE_TOKEN = void 0;
exports.HTTP_CODE_TOKEN = Symbol('instant:next:httpCode');
/**
 * Defines the HTTP response code of the route.
 *
 * @param code HTTP response code to be returned by the route handler.
 */
function HttpCode(code) {
    return function (target, propertyKey) {
        Reflect.defineMetadata(exports.HTTP_CODE_TOKEN, code, target.constructor, propertyKey);
    };
}
exports.HttpCode = HttpCode;
