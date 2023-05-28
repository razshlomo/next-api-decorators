import { HttpException } from './HttpException';
export declare class NotFoundException extends HttpException {
    name: string;
    /**
     * Instantiates a `NotFoundException` Exception with status code 404.
     *
     * @param message Error message (default: 'Not found')
     * @param errors Additional errors
     *
     * @example
     * `throw new NotFoundException()`
     */
    constructor(message?: string);
}
