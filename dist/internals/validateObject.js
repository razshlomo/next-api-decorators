"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateObject = void 0;
const exceptions_1 = require("../exceptions");
const getClassValidatorError_1 = require("./getClassValidatorError");
const loadPackage_1 = require("./loadPackage");
async function validateObject(cls, value, validatorOptions) {
    const classValidator = loadPackage_1.loadPackage('class-validator');
    if (!classValidator) {
        return value;
    }
    const classTransformer = loadPackage_1.loadPackage('class-transformer');
    if (!classTransformer) {
        return value;
    }
    if (value == null || typeof value !== 'object') {
        value = {};
    }
    const bodyValue = classTransformer.plainToClass(cls, value, {
        enableImplicitConversion: true,
        ...validatorOptions === null || validatorOptions === void 0 ? void 0 : validatorOptions.transformOptions
    });
    const validationErrors = await classValidator.validate(bodyValue, {
        enableDebugMessages: process.env.NODE_ENV === 'development',
        ...validatorOptions
    });
    if (validationErrors.length) {
        const flattenedErrors = getClassValidatorError_1.flattenValidationErrors(validationErrors);
        throw new exceptions_1.BadRequestException(flattenedErrors[0], flattenedErrors);
    }
    return bodyValue;
}
exports.validateObject = validateObject;
