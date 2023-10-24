import { OpenApiClientGeneratorOptions } from './openapi-client-generator.service';
export declare class AxiosClientGeneratorOptions implements OpenApiClientGeneratorOptions {
    enabled: boolean;
    type: string;
    outputFolderPath: string;
    additionalProperties: string;
    openApiFilePath: string;
    skipValidation: boolean;
    constructor(options?: Partial<AxiosClientGeneratorOptions>);
}
