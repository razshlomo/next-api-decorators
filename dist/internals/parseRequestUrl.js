"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseRequestUrl = void 0;
const path_1 = require("path");
const request_meta_1 = require("next/dist/server/request-meta");
function parseRequestUrl(req, directoryPath, fileName) {
    const nextReqMeta = req[request_meta_1.NEXT_REQUEST_META];
    const url = ((nextReqMeta === null || nextReqMeta === void 0 ? void 0 : nextReqMeta._nextDidRewrite) && nextReqMeta._nextRewroteUrl
        ? nextReqMeta._nextRewroteUrl
        : // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            req.url).split('?')[0];
    let path = url.split('/').slice(3).join('/');
    // The path for parametererized routes should be set to "/", in order for the methods to be matched.
    if (fileName === null || fileName === void 0 ? void 0 : fileName.startsWith('[')) {
        path = '/';
    }
    if (directoryPath && !(fileName === null || fileName === void 0 ? void 0 : fileName.startsWith('[...'))) {
        const pathRegExp = new RegExp(
        // "pages/api/articles/index.ts" is compiled into "pages/api/articles.js" which has to be appended to the directory path for parsing
        directoryPath.split('/pages')[1].replace(/(\[[0-9a-zA-Z-]+\])/, '([0-9a-zA-Z-]+)') +
            (fileName && !fileName.startsWith('[...') && !fileName.startsWith('[[...')
                ? `/${path_1.basename(fileName, path_1.extname(fileName))}`
                : ''));
        /* istanbul ignore else */
        if (pathRegExp.test(url)) {
            path = url.replace(pathRegExp, '');
        }
    }
    if (!path.startsWith('/')) {
        path = `/${path}`;
    }
    return path;
}
exports.parseRequestUrl = parseRequestUrl;
