"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFound = void 0;
function notFound(req, res) {
    var _a, _b;
    return res.status(404).json({
        statusCode: 404,
        message: `Cannot ${req.method} ${(_b = (_a = req.url) === null || _a === void 0 ? void 0 : _a.split('?')) === null || _b === void 0 ? void 0 : _b[0]}`,
        error: 'Not Found'
    });
}
exports.notFound = notFound;
