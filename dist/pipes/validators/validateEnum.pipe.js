"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateEnumPipe = void 0;
const exceptions_1 = require("../../exceptions");
const validatePipeOptions_1 = require("../validatePipeOptions");
/**
 * Validates string based on `Enum` values. Allows strings that are present in the enum.
 *
 * @remarks
 * Bare function usage has no effect.
 */
function ValidateEnumPipe(options) {
    return (value, metadata) => {
        validatePipeOptions_1.validatePipeOptions(value, metadata === null || metadata === void 0 ? void 0 : metadata.name, options);
        if (value && (options === null || options === void 0 ? void 0 : options.type)) {
            const values = Object.values(options.type);
            if (!values.includes(value)) {
                throw new exceptions_1.BadRequestException(`Validation failed${(metadata === null || metadata === void 0 ? void 0 : metadata.name) ? ` for ${metadata.name}` : ''} (expected one of the values: ${values.join(', ')})`);
            }
        }
        return value;
    };
}
exports.ValidateEnumPipe = ValidateEnumPipe;
