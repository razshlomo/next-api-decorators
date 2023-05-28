import { HttpException } from './HttpException';
export declare class InternalServerErrorException extends HttpException {
    name: string;
    /**
     * Instantiates an `InternalServerErrorException` Exception with status code 500.
     *
     * @param message Error message (default: 'Internal Server Error')
     * @param errors Additional errors
     *
     * @example
     * `throw new InternalServerErrorException()`
     */
    constructor(message?: string);
}
