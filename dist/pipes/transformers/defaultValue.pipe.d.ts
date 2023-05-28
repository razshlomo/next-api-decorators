import { ParameterPipe } from '../ParameterPipe';
/**
 * Assigns a default value to the parameter when its value is `null` or `undefined`.
 *
 * @remarks
 * Bare function usage has no effect.
 */
export declare function DefaultValuePipe<T>(defaultValue: T): ParameterPipe<T>;
