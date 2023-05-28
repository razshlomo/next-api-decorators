import { HttpException } from './HttpException';
export declare class ConflictException extends HttpException {
    name: string;
    /**
     * Instantiates a `ConflictException` Exception with status code 409.
     *
     * @param message Error message (default: 'Conflict')
     * @param errors Additional errors
     *
     * @example
     * `throw new ConflictException()`
     */
    constructor(message?: string);
}
