export declare const HTTP_CODE_TOKEN: unique symbol;
/**
 * Defines the HTTP response code of the route.
 *
 * @param code HTTP response code to be returned by the route handler.
 */
export declare function HttpCode(code: number): MethodDecorator;
