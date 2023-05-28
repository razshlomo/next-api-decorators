import type { ClassConstructor } from 'class-transformer';
import type { ValidationPipeOptions } from '../pipes';
export declare function validateObject(cls: ClassConstructor<any>, value: string | Record<string, any>, validatorOptions?: ValidationPipeOptions): Promise<any>;
