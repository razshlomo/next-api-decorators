"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCallerInfo = void 0;
const path_1 = require("path");
function getCallerInfo() {
    let errorStack = new Error().stack;
    /* istanbul ignore else */
    if (errorStack && process.platform === 'win32') {
        errorStack = errorStack.replace(/\\/g, '/');
    }
    const errorLine = errorStack === null || errorStack === void 0 ? void 0 : errorStack.split('\n').find(line => line.includes('/pages/api/'));
    const fileInfo = errorLine === null || errorLine === void 0 ? void 0 : errorLine.split(/:\d+:\d+/);
    /* istanbul ignore else */
    if (!(fileInfo === null || fileInfo === void 0 ? void 0 : fileInfo.length)) {
        return [undefined, undefined];
    }
    const fileName = fileInfo[0].trim().split('/pages/api/');
    return [
        path_1.join('/pages/api', path_1.dirname(fileName[fileName.length - 1])).replace(/\\/g, '/'),
        path_1.basename(fileName[fileName.length - 1])
    ];
}
exports.getCallerInfo = getCallerInfo;
