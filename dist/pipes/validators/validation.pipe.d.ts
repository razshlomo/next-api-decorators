import type { ClassTransformOptions } from 'class-transformer';
import type { ValidatorOptions } from 'class-validator';
import type { ParameterPipe } from '../ParameterPipe';
export interface ValidationPipeOptions extends ValidatorOptions {
    /** Options for the `class-transformer` package. */
    transformOptions?: ClassTransformOptions;
}
/**
 * Validates request body values and gets them as DTOs.
 *
 * @remarks
 * `class-validator` and `class-transformer` need to be installed.
 * More information: [data transfer object](https://next-api-decorators.vercel.app/docs/validation)
 */
export declare function ValidationPipe(options?: ValidationPipeOptions): ParameterPipe<any>;
