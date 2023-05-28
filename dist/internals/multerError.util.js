"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleMulterError = void 0;
const exceptions_1 = require("../exceptions");
// https://github.com/nestjs/nest/blob/master/packages/platform-express/multer/multer/multer.constants.ts
const multerExceptions = {
    LIMIT_PART_COUNT: 'Too many parts',
    LIMIT_FILE_SIZE: 'File too large',
    LIMIT_FILE_COUNT: 'Too many files',
    LIMIT_FIELD_KEY: 'Field name too long',
    LIMIT_FIELD_VALUE: 'Field value too long',
    LIMIT_FIELD_COUNT: 'Too many fields',
    LIMIT_UNEXPECTED_FILE: 'Unexpected field'
};
function handleMulterError(error) {
    if (error.name !== 'MulterError' || error instanceof exceptions_1.HttpException) {
        return error;
    }
    switch (error.message) {
        case multerExceptions.LIMIT_FILE_SIZE:
            return new exceptions_1.PayloadTooLargeException(`${error.message}${typeof error === 'object' && 'field' in error ? `: "${error.field}"` : ''}`);
        case multerExceptions.LIMIT_FILE_COUNT:
        case multerExceptions.LIMIT_FIELD_KEY:
        case multerExceptions.LIMIT_FIELD_VALUE:
        case multerExceptions.LIMIT_FIELD_COUNT:
        case multerExceptions.LIMIT_UNEXPECTED_FILE:
        case multerExceptions.LIMIT_PART_COUNT:
            return new exceptions_1.BadRequestException(`${error.message}${typeof error === 'object' && 'field' in error ? `: "${error.field}"` : ''}`);
    }
    return error;
}
exports.handleMulterError = handleMulterError;
