"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateNullable = void 0;
function validateNullable(value, nullable) {
    return !!nullable && value == null;
}
exports.validateNullable = validateNullable;
