"use strict";
/**
 * Functions below are taken from Nest.js and modify where necessary to satisfy the needs of this package.
 *
 * https://github.com/nestjs/nest
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.flattenValidationErrors = void 0;
function prependConstraintsWithParentProp(parentPath, error) {
    const constraints = {};
    for (const key in error.constraints) {
        constraints[key] = `${parentPath}.${error.constraints[key]}`;
    }
    return {
        ...error,
        constraints
    };
}
function mapChildrenToValidationErrors(error, parentPath) {
    if (!(error.children && error.children.length)) {
        return [error];
    }
    const validationErrors = [];
    parentPath = parentPath ? `${parentPath}.${error.property}` : error.property;
    for (const item of error.children) {
        if (item.children && item.children.length) {
            validationErrors.push(...mapChildrenToValidationErrors(item, parentPath));
        }
        validationErrors.push(prependConstraintsWithParentProp(parentPath, item));
    }
    return validationErrors;
}
function flattenValidationErrors(validationErrors) {
    return validationErrors
        .flatMap(error => mapChildrenToValidationErrors(error))
        .filter((item) => !!item.constraints)
        .flatMap((item) => { var _a; return Object.values((_a = item.constraints) !== null && _a !== void 0 ? _a : {}); });
}
exports.flattenValidationErrors = flattenValidationErrors;
