import type { ParameterPipe, PipeOptions } from '../ParameterPipe';
interface ValidateEnumPipeOptions<T extends Record<string, unknown>> extends PipeOptions {
    /** Enum object to validate the value against. */
    type: T;
}
/**
 * Validates string based on `Enum` values. Allows strings that are present in the enum.
 *
 * @remarks
 * Bare function usage has no effect.
 */
export declare function ValidateEnumPipe<T extends Record<string, unknown>>(options?: ValidateEnumPipeOptions<T>): ParameterPipe<number>;
export {};
