"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Download = exports.HTTP_DOWNLOAD_TOKEN = void 0;
exports.HTTP_DOWNLOAD_TOKEN = Symbol('instant:next:download');
/**
 * Marks the method as a download handler for the client, so the returned file can be downloaded by the browser.
 *
 * @remarks
 * The method has to return an object with specific fields for the internal handler to insert the necessary headers and return the file contents to the browser to download.
 *
 * The return type must comply with the following interface:
 *
 * ```ts
 * interface DownloadFileResult {
 *  filename: string;
 *  contents: Stream | Buffer | string;
 *  contentType?: string
 * }
 * ```
 */
function Download() {
    return function (target, propertyKey) {
        Reflect.defineMetadata(exports.HTTP_DOWNLOAD_TOKEN, true, target.constructor, propertyKey);
    };
}
exports.Download = Download;
