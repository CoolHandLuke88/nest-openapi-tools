"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AxiosClientGeneratorOptions = void 0;
class AxiosClientGeneratorOptions {
    constructor(options) {
        this.enabled = true;
        this.type = 'typescript-axios';
        this.outputFolderPath = '../typescript-api-client/src';
        this.additionalProperties = 'apiPackage=clients,modelPackage=models,withoutPrefixEnums=true,withSeparateModelsAndApi=true';
        this.openApiFilePath = './openapi.yaml';
        this.skipValidation = true;
        Object.assign(this, options);
    }
}
exports.AxiosClientGeneratorOptions = AxiosClientGeneratorOptions;
//# sourceMappingURL=axios.client-generator-options.js.map