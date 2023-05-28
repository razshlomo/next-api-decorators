import type { PipeMetadata, PipeOptions } from '../ParameterPipe';
/** Validates and transforms `Date` strings. Allows valid `ISO 8601` formatted date strings. */
export declare function ParseDatePipe(options?: PipeOptions): (value: any, metadata?: PipeMetadata<any> | undefined) => Date | undefined;
