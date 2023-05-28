"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequestException = void 0;
const HttpException_1 = require("./HttpException");
class BadRequestException extends HttpException_1.HttpException {
    /**
     * Instantiates a `BadRequestException` Exception with status code 400.
     *
     * @param message Error message (default: 'Bad Request')
     * @param errors Additional errors
     *
     * @example
     * `throw new BadRequestException()`
     */
    constructor(message = 'Bad Request', errors) {
        super(400, message, errors);
        this.name = 'BadRequestException';
    }
}
exports.BadRequestException = BadRequestException;
