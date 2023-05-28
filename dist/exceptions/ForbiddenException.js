"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForbiddenException = void 0;
const HttpException_1 = require("./HttpException");
class ForbiddenException extends HttpException_1.HttpException {
    /**
     * Instantiates a `ForbiddenException` Exception with status code 403.
     *
     * @param message Error message (default: 'Forbidden')
     * @param errors Additional errors
     *
     * @example
     * `throw new ForbiddenException()`
     */
    constructor(message = 'Forbidden') {
        super(403, message);
        this.name = 'ForbiddenException';
    }
}
exports.ForbiddenException = ForbiddenException;
