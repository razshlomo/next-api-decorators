import { HttpException } from './HttpException';
export declare class UnauthorizedException extends HttpException {
    name: string;
    /**
     * Instantiates an `UnauthorizedException` Exception with status code 401.
     *
     * @param message Error message (default: 'Unauthorized')
     * @param errors Additional errors
     *
     * @example
     * `throw new UnauthorizedException()`
     */
    constructor(message?: string);
}
