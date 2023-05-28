import type { ClassConstructor } from 'class-transformer';
import type { NextApiRequest, NextApiResponse } from 'next';
export declare const CATCH_TOKEN: unique symbol;
declare type ExceptionHandlerFunction<T> = (error: T, req: NextApiRequest, res: NextApiResponse) => void | Promise<void>;
export interface ExceptionHandler<T> {
    handler: ExceptionHandlerFunction<T>;
    exceptionType?: ClassConstructor<T>;
}
export declare function Catch<T>(fn: ExceptionHandler<T>['handler'], type?: ExceptionHandler<T>['exceptionType']): ClassDecorator & MethodDecorator;
export {};
