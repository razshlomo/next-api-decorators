"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetHeader = exports.HEADER_TOKEN = void 0;
exports.HEADER_TOKEN = Symbol('instant:next:header');
/**
 * Sets a header parameter into the response header.
 *
 * @param name Parameter name
 * @param value Parameter value
 */
function SetHeader(name, value) {
    return function (target, propertyKey) {
        var _a, _b;
        switch (typeof target) {
            case 'function': {
                const classHeaders = (_a = Reflect.getMetadata(exports.HEADER_TOKEN, target)) !== null && _a !== void 0 ? _a : new Map();
                classHeaders.set(name, value);
                Reflect.defineMetadata(exports.HEADER_TOKEN, classHeaders, target);
                break;
            }
            case 'object': {
                const classHeaders = (_b = Reflect.getMetadata(exports.HEADER_TOKEN, target.constructor, propertyKey)) !== null && _b !== void 0 ? _b : new Map();
                classHeaders.set(name, value);
                Reflect.defineMetadata(exports.HEADER_TOKEN, classHeaders, target.constructor, propertyKey);
                break;
            }
        }
    };
}
exports.SetHeader = SetHeader;
