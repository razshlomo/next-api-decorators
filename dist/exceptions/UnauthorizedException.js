"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnauthorizedException = void 0;
const HttpException_1 = require("./HttpException");
class UnauthorizedException extends HttpException_1.HttpException {
    /**
     * Instantiates an `UnauthorizedException` Exception with status code 401.
     *
     * @param message Error message (default: 'Unauthorized')
     * @param errors Additional errors
     *
     * @example
     * `throw new UnauthorizedException()`
     */
    constructor(message = 'Unauthorized') {
        super(401, message);
        this.name = 'UnauthorizedException';
    }
}
exports.UnauthorizedException = UnauthorizedException;
