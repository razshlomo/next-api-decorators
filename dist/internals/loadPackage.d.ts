interface LoadPackageWarning {
    context: string;
    docsUrl: string;
}
declare type LoadablePackages = 'path-to-regexp' | 'class-validator' | 'class-transformer';
export declare function loadPackage(name: LoadablePackages, warning?: LoadPackageWarning): any;
export {};
