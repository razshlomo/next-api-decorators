"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParseBooleanPipe = void 0;
const exceptions_1 = require("../../exceptions");
const validateNullable_1 = require("../validateNullable");
const validatePipeOptions_1 = require("../validatePipeOptions");
/** Validates and transforms `Boolean` strings. Allows `'true'` and `'false'`. */
function ParseBooleanPipe(options) {
    return (value, metadata) => {
        validatePipeOptions_1.validatePipeOptions(value, metadata === null || metadata === void 0 ? void 0 : metadata.name, options);
        if (validateNullable_1.validateNullable(value, options === null || options === void 0 ? void 0 : options.nullable)) {
            return undefined;
        }
        if (value === true || value === 'true') {
            return true;
        }
        if (value === false || value === 'false') {
            return false;
        }
        throw new exceptions_1.BadRequestException(`Validation failed${(metadata === null || metadata === void 0 ? void 0 : metadata.name) ? ` for ${metadata.name}` : ''} (boolean string is expected)`);
    };
}
exports.ParseBooleanPipe = ParseBooleanPipe;
