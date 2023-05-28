import { HttpException } from './HttpException';
export declare class PayloadTooLargeException extends HttpException {
    name: string;
    /**
     * Instantiates a `PayloadTooLargeException` Exception with status code 413.
     *
     * @param message Error message (default: 'Payload Too Large')
     * @param errors Additional errors
     *
     * @example
     * `throw new PayloadTooLargeException()`
     */
    constructor(message?: string, errors?: string[]);
}
