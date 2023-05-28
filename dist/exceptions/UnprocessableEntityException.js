"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnprocessableEntityException = void 0;
const HttpException_1 = require("./HttpException");
class UnprocessableEntityException extends HttpException_1.HttpException {
    /**
     * Instantiates an `UnprocessableEntityException` Exception with status code 422.
     *
     * @param message Error message (default: 'Unprocessable Entity')
     * @param errors Additional errors
     *
     * @example
     * `throw new UnprocessableEntityException()`
     */
    constructor(message = 'Unprocessable Entity', errors) {
        super(422, message, errors);
        this.name = 'UnprocessableEntityException';
    }
}
exports.UnprocessableEntityException = UnprocessableEntityException;
