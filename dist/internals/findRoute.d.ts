import { Key } from 'path-to-regexp';
import { HandlerMethod } from '../decorators';
export declare function findRoute(cls: Record<string, any>, requestMethod: string, path: string): [Key[], RegExpExecArray | null | undefined, HandlerMethod | undefined];
