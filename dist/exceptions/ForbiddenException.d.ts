import { HttpException } from './HttpException';
export declare class ForbiddenException extends HttpException {
    name: string;
    /**
     * Instantiates a `ForbiddenException` Exception with status code 403.
     *
     * @param message Error message (default: 'Forbidden')
     * @param errors Additional errors
     *
     * @example
     * `throw new ForbiddenException()`
     */
    constructor(message?: string);
}
