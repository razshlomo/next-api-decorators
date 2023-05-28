"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpException = void 0;
/** Defines the base HTTP exception. */
class HttpException extends Error {
    /**
     * Instantiates an `HttpException` Exception.
     *
     * @param statusCode HTTP status code
     * @param message Error message
     * @param errors Additional errors
     *
     * @example
     * `throw new HttpException(403, 'Forbidden')`
     */
    constructor(statusCode, message, errors) {
        super(message);
        this.name = 'HttpException';
        this.statusCode = statusCode;
        this.errors = errors;
    }
}
exports.HttpException = HttpException;
