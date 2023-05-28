"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findRoute = void 0;
const decorators_1 = require("../decorators");
const loadPackage_1 = require("./loadPackage");
function findRoute(cls, requestMethod, path) {
    const methods = Reflect.getMetadata(decorators_1.HTTP_METHOD_TOKEN, cls);
    const { pathToRegexp } = loadPackage_1.loadPackage('path-to-regexp');
    if (!pathToRegexp) {
        const method = methods.find(f => {
            var _a, _b;
            return f.path === path &&
                (f.method === requestMethod || ((_b = (_a = f.options) === null || _a === void 0 ? void 0 : _a.extraMethods) === null || _b === void 0 ? void 0 : _b.includes(requestMethod)));
        });
        return [
            [],
            undefined,
            method !== null && method !== void 0 ? method : methods.find(f => {
                var _a, _b;
                return f.path === '/' &&
                    (f.method === requestMethod || ((_b = (_a = f.options) === null || _a === void 0 ? void 0 : _a.extraMethods) === null || _b === void 0 ? void 0 : _b.includes(requestMethod)));
            })
        ];
    }
    const keys = [];
    let match;
    const method = methods.find(f => {
        var _a, _b;
        match = pathToRegexp(f.path, keys).exec(path);
        const condition = (f.method === requestMethod || ((_b = (_a = f.options) === null || _a === void 0 ? void 0 : _a.extraMethods) === null || _b === void 0 ? void 0 : _b.includes(requestMethod))) && (match === null || match === void 0 ? void 0 : match.length);
        if (!condition) {
            keys.length = 0;
            match = undefined;
        }
        return condition;
    });
    return [keys, match, method];
}
exports.findRoute = findRoute;
