/** Defines the base HTTP exception. */
export declare class HttpException extends Error {
    name: string;
    statusCode: number;
    errors?: string[];
    /**
     * Instantiates an `HttpException` Exception.
     *
     * @param statusCode HTTP status code
     * @param message Error message
     * @param errors Additional errors
     *
     * @example
     * `throw new HttpException(403, 'Forbidden')`
     */
    constructor(statusCode: number, message?: string, errors?: string[]);
}
