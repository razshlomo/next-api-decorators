"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHandler = void 0;
const findRoute_1 = require("./internals/findRoute");
const getCallerInfo_1 = require("./internals/getCallerInfo");
const getParams_1 = require("./internals/getParams");
const notFound_1 = require("./internals/notFound");
const parseRequestUrl_1 = require("./internals/parseRequestUrl");
/**
 * Prepares a router for the given class.
 *
 * @param cls Router class
 *
 * @example
 * ```ts
 * import { createHandler, Get } from 'next-api-decorators';
 *
 * class Events {
 *  Get()
 *  public events() {
 *    return DB.findEvents();
 *  }
 * }
 *
 * export default createHandler(Events);
 * ```
 */
function createHandler(cls) {
    const instance = new cls();
    const [directory, fileName] = getCallerInfo_1.getCallerInfo();
    return (req, res) => {
        if (!req.url || !req.method) {
            return notFound_1.notFound(req, res);
        }
        const path = parseRequestUrl_1.parseRequestUrl(req, directory, fileName);
        const [keys, match, method] = findRoute_1.findRoute(cls, req.method, path);
        if (!method) {
            return notFound_1.notFound(req, res);
        }
        const methodFn = instance[method.propertyKey];
        if (!methodFn) {
            return notFound_1.notFound(req, res);
        }
        req.params = getParams_1.getParams(keys, match);
        return methodFn.call(instance, req, res);
    };
}
exports.createHandler = createHandler;
