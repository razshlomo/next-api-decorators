/**
 * Functions below are taken from Nest.js and modify where necessary to satisfy the needs of this package.
 *
 * https://github.com/nestjs/nest
 */
import type { ValidationError } from 'class-validator';
export declare function flattenValidationErrors(validationErrors: ValidationError[]): string[];
