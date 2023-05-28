"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalServerErrorException = void 0;
const HttpException_1 = require("./HttpException");
class InternalServerErrorException extends HttpException_1.HttpException {
    /**
     * Instantiates an `InternalServerErrorException` Exception with status code 500.
     *
     * @param message Error message (default: 'Internal Server Error')
     * @param errors Additional errors
     *
     * @example
     * `throw new InternalServerErrorException()`
     */
    constructor(message = 'Internal Server Error') {
        super(500, message);
        this.name = 'InternalServerErrorException';
    }
}
exports.InternalServerErrorException = InternalServerErrorException;
