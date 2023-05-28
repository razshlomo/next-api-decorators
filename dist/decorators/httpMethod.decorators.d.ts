export declare enum HttpMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
    PATCH = "PATCH",
    OPTIONS = "OPTIONS",
    HEAD = "HEAD",
    CONNECT = "CONNECT",
    TRACE = "TRACE"
}
export interface HandlerMethod {
    method: HttpMethod;
    options?: HandlerOptions;
    path: string;
    propertyKey: string | symbol;
}
interface HandlerOptions {
    extraMethods?: HttpMethod[];
}
export declare const HTTP_METHOD_TOKEN: unique symbol;
/** Makes the method a GET request handler. */
export declare function Get(): MethodDecorator;
export declare function Get(options: HandlerOptions): MethodDecorator;
/**
 * Makes the method for the defined path a GET request handler.
 *
 * @param path Route path. Supports Express.js style [route matching](https://next-api-decorators.vercel.app/docs/routing/route-matching)
 * including route parameters (e.g. `'/:id'`) and regular expressions.
 *
 * @remarks
 * `path-to-regexp` needs to be installed, otherwise request handlers with non-empty path parameters will not be handled.
 * More information: [route matching](https://next-api-decorators.vercel.app/docs/routing/route-matching)
 */
export declare function Get(path: string): MethodDecorator;
export declare function Get(path: string, options: HandlerOptions): MethodDecorator;
/** Makes the method a POST request handler. */
export declare function Post(): MethodDecorator;
export declare function Post(options: HandlerOptions): MethodDecorator;
/**
 * Makes the method for the defined path a POST request handler.
 *
 * @param path Route path. Supports Express.js style [route matching](https://next-api-decorators.vercel.app/docs/routing/route-matching)
 * including route parameters (e.g. `'/:id'`) and regular expressions.
 *
 * @remarks
 * `path-to-regexp` needs to be installed, otherwise request handlers with non-empty path parameters will not be handled.
 * More information: [route matching](https://next-api-decorators.vercel.app/docs/routing/route-matching)
 */
export declare function Post(path: string): MethodDecorator;
export declare function Post(path: string, options: HandlerOptions): MethodDecorator;
/** Makes the method a PUT request handler. */
export declare function Put(): MethodDecorator;
export declare function Put(options: HandlerOptions): MethodDecorator;
/**
 * Makes the method for the defined path a PUT request handler.
 *
 * @param path Route path. Supports Express.js style [route matching](https://next-api-decorators.vercel.app/docs/routing/route-matching)
 * including route parameters (e.g. `'/:id'`) and regular expressions.
 *
 * @remarks
 * `path-to-regexp` needs to be installed, otherwise request handlers with non-empty path parameters will not be handled.
 * More information: [route matching](https://next-api-decorators.vercel.app/docs/routing/route-matching)
 */
export declare function Put(path: string): MethodDecorator;
export declare function Put(path: string, options: HandlerOptions): MethodDecorator;
/** Makes the method a DELETE request handler. */
export declare function Delete(): MethodDecorator;
export declare function Delete(options: HandlerOptions): MethodDecorator;
/**
 * Makes the method for the defined path a DELETE request handler.
 *
 * @param path Route path. Supports Express.js style [route matching](https://next-api-decorators.vercel.app/docs/routing/route-matching)
 * including route parameters (e.g. `'/:id'`) and regular expressions.
 *
 * @remarks
 * `path-to-regexp` needs to be installed, otherwise request handlers with non-empty path parameters will not be handled.
 * More information: [route matching](https://next-api-decorators.vercel.app/docs/routing/route-matching)
 */
export declare function Delete(path: string): MethodDecorator;
export declare function Delete(path: string, options: HandlerOptions): MethodDecorator;
/** Makes the method a PATCH request handler. */
export declare function Patch(): MethodDecorator;
export declare function Patch(options: HandlerOptions): MethodDecorator;
/**
 * Makes the method for the defined path a PATCH request handler.
 *
 * @param path Route path. Supports Express.js style [route matching](https://next-api-decorators.vercel.app/docs/routing/route-matching)
 * including route parameters (e.g. `'/:id'`) and regular expressions.
 *
 * @remarks
 * `path-to-regexp` needs to be installed, otherwise request handlers with non-empty path parameters will not be handled.
 * More information: [route matching](https://next-api-decorators.vercel.app/docs/routing/route-matching)
 */
export declare function Patch(path: string): MethodDecorator;
export declare function Patch(path: string, options: HandlerOptions): MethodDecorator;
export {};
