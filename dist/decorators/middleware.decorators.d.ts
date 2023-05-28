import type { RequestHandler } from 'express';
import type { NextApiRequest, NextApiResponse } from 'next';
export declare const MIDDLEWARE_TOKEN: unique symbol;
export declare type NextFunction = (err?: Error) => void;
export declare type NextMiddleware = (req: NextApiRequest, res: NextApiResponse, next: NextFunction) => void | Promise<void>;
export declare type Middleware = NextMiddleware | RequestHandler;
export declare function createMiddlewareDecorator(middleware: Middleware): () => (target: object, propertyKey?: string | symbol | undefined) => void;
export declare function UseMiddleware(...middlewares: Middleware[]): ClassDecorator & MethodDecorator;
