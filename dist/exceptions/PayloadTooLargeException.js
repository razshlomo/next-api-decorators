"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayloadTooLargeException = void 0;
const HttpException_1 = require("./HttpException");
class PayloadTooLargeException extends HttpException_1.HttpException {
    /**
     * Instantiates a `PayloadTooLargeException` Exception with status code 413.
     *
     * @param message Error message (default: 'Payload Too Large')
     * @param errors Additional errors
     *
     * @example
     * `throw new PayloadTooLargeException()`
     */
    constructor(message = 'Payload Too Large', errors) {
        super(413, message, errors);
        this.name = 'PayloadTooLargeException';
    }
}
exports.PayloadTooLargeException = PayloadTooLargeException;
