import type { NextApiRequest } from 'next';
import type { ParameterPipe } from '../pipes/ParameterPipe';
declare type ParamDecorator<T> = (req: NextApiRequest) => T;
export interface MetaParameter {
    index: number;
    location: 'query' | 'body' | 'header' | 'method' | 'request' | 'response' | 'params' | 'file' | 'files' | 'custom';
    name?: string;
    pipes?: ParameterPipe<any>[];
    fn?: ParamDecorator<any>;
}
export declare const PARAMETER_TOKEN: unique symbol;
/** Returns the query string. */
export declare function Query(): ParameterDecorator;
/**
 * Returns a parameter from the query string.
 *
 * @param name Parameter name
 */
export declare function Query(name: string): ParameterDecorator;
/**
 * Returns a parameter from the query string with pipes applied.
 *
 * @param name Parameter name
 * @param pipes Pipes to be applied
 */
export declare function Query(name: string, ...pipes: ParameterPipe<any>[]): ParameterDecorator;
/**
 * Returns the query string with pipes applied.
 *
 * @param pipes Pipes to be applied
 */
export declare function Query(...pipes: ParameterPipe<any>[]): ParameterDecorator;
/**
 * Returns a parameter from the URL path.
 *
 * @param name Parameter name
 */
export declare function Param(name: string): ParameterDecorator;
/**
 * Returns a parameter from the URL path with pipes applied.
 *
 * @param name Parameter name
 * @param pipes Pipes to be applied
 */
export declare function Param(name: string, ...pipes: ParameterPipe<any>[]): ParameterDecorator;
/** Returns the request body. */
export declare function Body(): ParameterDecorator;
/**
 * Returns the request body with pipes applied.
 *
 * @param pipes Pipes to be applied
 */
export declare function Body(...pipes: ParameterPipe<any>[]): ParameterDecorator;
/**
 * Returns a parameter from the request header.
 *
 * @param name Parameter name
 */
export declare function Header(name: string): ParameterDecorator;
/** Returns the `req` object. */
export declare function Req(): ParameterDecorator;
/** Returns the `req` object. */
export declare function Request(): ParameterDecorator;
/** Returns the `res` object. */
export declare function Res(): ParameterDecorator;
/** Returns the `res` object. */
export declare function Response(): ParameterDecorator;
export declare function UploadedFile(): ParameterDecorator;
export declare function UploadedFiles(): ParameterDecorator;
export declare function createParamDecorator<T = any>(fn: ParamDecorator<T>): () => ParameterDecorator;
export {};
