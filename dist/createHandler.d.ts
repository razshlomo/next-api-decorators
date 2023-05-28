import type { NextApiHandler } from 'next';
/**
 * Prepares a router for the given class.
 *
 * @param cls Router class
 *
 * @example
 * ```ts
 * import { createHandler, Get } from 'next-api-decorators';
 *
 * class Events {
 *  Get()
 *  public events() {
 *    return DB.findEvents();
 *  }
 * }
 *
 * export default createHandler(Events);
 * ```
 */
export declare function createHandler(cls: new (...args: any[]) => any): NextApiHandler;
