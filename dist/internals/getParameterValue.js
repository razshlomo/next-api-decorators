"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getParameterValue = void 0;
function getParameterValue(req, res, { location, name }) {
    switch (location) {
        case 'query':
            return name ? req.query[name] : req.query;
        case 'body':
            return req.body;
        case 'header':
            return name ? req.headers[name.toLowerCase()] : req.headers;
        case 'params':
            return name ? req.params[name] : req.params;
        case 'request':
            return req;
        case 'response':
            return res;
        case 'file':
            return req.file;
        case 'files':
            return req.files;
    }
}
exports.getParameterValue = getParameterValue;
