import { NextApiRequest, NextApiResponse } from 'next';
export declare function handleException(target: Function | object, propertyKey: string | symbol, exception: unknown, req: NextApiRequest, res: NextApiResponse): Promise<void>;
