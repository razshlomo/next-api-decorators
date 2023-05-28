"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseMiddleware = exports.createMiddlewareDecorator = exports.MIDDLEWARE_TOKEN = void 0;
exports.MIDDLEWARE_TOKEN = Symbol('instant:next:middlewares');
function createMiddlewareDecorator(middleware) {
    return () => (target, propertyKey) => {
        var _a;
        const definedMiddlewares = (_a = (propertyKey
            ? Reflect.getMetadata(exports.MIDDLEWARE_TOKEN, target.constructor, propertyKey)
            : Reflect.getMetadata(exports.MIDDLEWARE_TOKEN, target))) !== null && _a !== void 0 ? _a : [];
        definedMiddlewares.unshift(middleware);
        if (propertyKey) {
            Reflect.defineMetadata(exports.MIDDLEWARE_TOKEN, definedMiddlewares, target.constructor, propertyKey);
        }
        else {
            Reflect.defineMetadata(exports.MIDDLEWARE_TOKEN, definedMiddlewares, target);
        }
    };
}
exports.createMiddlewareDecorator = createMiddlewareDecorator;
function UseMiddleware(...middlewares) {
    return function (target, propertyKey) {
        middlewares.reverse().forEach(middleware => createMiddlewareDecorator(middleware)()(target, propertyKey));
    };
}
exports.UseMiddleware = UseMiddleware;
