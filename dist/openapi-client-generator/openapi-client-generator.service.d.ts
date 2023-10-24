export interface OpenApiClientGeneratorOptions {
    enabled: boolean;
    type: string;
    openApiFilePath: string;
    outputFolderPath: string;
    additionalProperties?: string;
    globalProperty?: string;
    skipValidation?: boolean;
}
export declare class OpenApiClientGeneratorService {
    generateClient(options: OpenApiClientGeneratorOptions): Promise<void>;
}
