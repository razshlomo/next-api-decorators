"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationPipe = void 0;
const loadPackage_1 = require("../../internals/loadPackage");
const validateObject_1 = require("../../internals/validateObject");
/**
 * Validates request body values and gets them as DTOs.
 *
 * @remarks
 * `class-validator` and `class-transformer` need to be installed.
 * More information: [data transfer object](https://next-api-decorators.vercel.app/docs/validation)
 */
function ValidationPipe(options) {
    if (process.env.NODE_ENV === 'development') {
        ['class-validator', 'class-transformer'].forEach(requiredPackage => loadPackage_1.loadPackage(requiredPackage, {
            context: 'ValidationPipe',
            docsUrl: 'https://next-api-decorators.vercel.app/docs/validation'
        }));
    }
    return (value, metadata) => {
        if (!(metadata === null || metadata === void 0 ? void 0 : metadata.metaType)) {
            return value;
        }
        return validateObject_1.validateObject(metadata === null || metadata === void 0 ? void 0 : metadata.metaType, value, options);
    };
}
exports.ValidationPipe = ValidationPipe;
