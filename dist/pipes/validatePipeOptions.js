"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePipeOptions = void 0;
const exceptions_1 = require("../exceptions");
function validatePipeOptions(value, name, options) {
    if (!(options === null || options === void 0 ? void 0 : options.nullable) && (value == null || value.toString().trim().length === 0)) {
        throw new exceptions_1.BadRequestException(name ? `${name} is a required parameter.` : 'Missing a required parameter.');
    }
}
exports.validatePipeOptions = validatePipeOptions;
