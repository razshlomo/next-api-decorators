"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultValuePipe = void 0;
/**
 * Assigns a default value to the parameter when its value is `null` or `undefined`.
 *
 * @remarks
 * Bare function usage has no effect.
 */
function DefaultValuePipe(defaultValue) {
    return (value) => {
        if (value == null || (typeof value === 'number' && Number.isNaN(value))) {
            return defaultValue;
        }
        return value;
    };
}
exports.DefaultValuePipe = DefaultValuePipe;
