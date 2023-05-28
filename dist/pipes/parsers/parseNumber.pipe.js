"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParseNumberPipe = void 0;
const exceptions_1 = require("../../exceptions");
const validateNullable_1 = require("../validateNullable");
const validatePipeOptions_1 = require("../validatePipeOptions");
/** Validates and transforms `Number` strings. Uses `parseFloat` under the hood. */
function ParseNumberPipe(options) {
    return (value, metadata) => {
        validatePipeOptions_1.validatePipeOptions(value, metadata === null || metadata === void 0 ? void 0 : metadata.name, options);
        if (validateNullable_1.validateNullable(value, options === null || options === void 0 ? void 0 : options.nullable)) {
            return undefined;
        }
        const isNumeric = ['string', 'number'].includes(typeof value) && !isNaN(parseFloat(value)) && isFinite(value);
        if (!isNumeric) {
            throw new exceptions_1.BadRequestException(`Validation failed${(metadata === null || metadata === void 0 ? void 0 : metadata.name) ? ` for ${metadata.name}` : ''} (numeric string is expected)`);
        }
        return parseFloat(value);
    };
}
exports.ParseNumberPipe = ParseNumberPipe;
