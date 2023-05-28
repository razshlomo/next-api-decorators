import type { ParameterPipe, PipeOptions } from '../ParameterPipe';
/** Validates and transforms `Number` strings. Uses `parseFloat` under the hood. */
export declare function ParseNumberPipe(options?: PipeOptions): ParameterPipe<number>;
