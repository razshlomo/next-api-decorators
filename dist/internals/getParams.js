"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getParams = void 0;
const decodeParam_1 = require("./decodeParam");
function getParams(keys, match) {
    const params = {};
    if ((keys === null || keys === void 0 ? void 0 : keys.length) && match) {
        for (let i = 1; i < match.length; i++) {
            const key = keys[i - 1];
            const prop = key.name;
            const val = decodeParam_1.decodeParam(match[i]);
            if (val != null || !Object.hasOwnProperty.call(params, prop)) {
                params[prop] = val;
            }
        }
    }
    return params;
}
exports.getParams = getParams;
