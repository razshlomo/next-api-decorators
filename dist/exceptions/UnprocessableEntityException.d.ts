import { HttpException } from './HttpException';
export declare class UnprocessableEntityException extends HttpException {
    name: string;
    /**
     * Instantiates an `UnprocessableEntityException` Exception with status code 422.
     *
     * @param message Error message (default: 'Unprocessable Entity')
     * @param errors Additional errors
     *
     * @example
     * `throw new UnprocessableEntityException()`
     */
    constructor(message?: string, errors?: string[]);
}
