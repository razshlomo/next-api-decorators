import type { NextApiRequest, NextApiResponse } from 'next';
import type { MetaParameter } from '../decorators';
export declare function getParameterValue(req: NextApiRequest, res: NextApiResponse, { location, name }: MetaParameter): string | object | undefined;
