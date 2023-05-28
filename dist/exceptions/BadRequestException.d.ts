import { HttpException } from './HttpException';
export declare class BadRequestException extends HttpException {
    name: string;
    /**
     * Instantiates a `BadRequestException` Exception with status code 400.
     *
     * @param message Error message (default: 'Bad Request')
     * @param errors Additional errors
     *
     * @example
     * `throw new BadRequestException()`
     */
    constructor(message?: string, errors?: string[]);
}
