"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConflictException = void 0;
const HttpException_1 = require("./HttpException");
class ConflictException extends HttpException_1.HttpException {
    /**
     * Instantiates a `ConflictException` Exception with status code 409.
     *
     * @param message Error message (default: 'Conflict')
     * @param errors Additional errors
     *
     * @example
     * `throw new ConflictException()`
     */
    constructor(message = 'Conflict') {
        super(409, message);
        this.name = 'ConflictException';
    }
}
exports.ConflictException = ConflictException;
