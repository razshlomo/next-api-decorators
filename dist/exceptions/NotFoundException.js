"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundException = void 0;
const HttpException_1 = require("./HttpException");
class NotFoundException extends HttpException_1.HttpException {
    /**
     * Instantiates a `NotFoundException` Exception with status code 404.
     *
     * @param message Error message (default: 'Not found')
     * @param errors Additional errors
     *
     * @example
     * `throw new NotFoundException()`
     */
    constructor(message = 'Not Found') {
        super(404, message);
        this.name = 'NotFoundException';
    }
}
exports.NotFoundException = NotFoundException;
