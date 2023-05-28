"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Catch = exports.CATCH_TOKEN = void 0;
exports.CATCH_TOKEN = Symbol('instant:next:catch');
function Catch(fn, type) {
    return function (target, propertyKey) {
        var _a;
        const handlers = (_a = (propertyKey
            ? Reflect.getMetadata(exports.CATCH_TOKEN, target.constructor, propertyKey)
            : Reflect.getMetadata(exports.CATCH_TOKEN, target))) !== null && _a !== void 0 ? _a : [];
        handlers.unshift({ handler: fn, exceptionType: type });
        if (propertyKey) {
            Reflect.defineMetadata(exports.CATCH_TOKEN, handlers, target.constructor, propertyKey);
        }
        else {
            Reflect.defineMetadata(exports.CATCH_TOKEN, handlers, target);
        }
    };
}
exports.Catch = Catch;
