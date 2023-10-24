import { DocumentBuilder, SwaggerDocumentOptions } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';
import { OpenApiFileGeneratorOptions, OpenApiFileGeneratorService } from './openapi-file-generator/openapi-file-generator.service';
import { OpenApiClientGeneratorOptions, OpenApiClientGeneratorService } from './openapi-client-generator/openapi-client-generator.service';
export interface OpenApiWebServerOptions {
    enabled: boolean;
    path: string;
}
export interface OpenApiOptions {
    clientGeneratorOptions?: OpenApiClientGeneratorOptions;
    fileGeneratorOptions?: OpenApiFileGeneratorOptions;
    webServerOptions?: OpenApiWebServerOptions;
}
export declare class OpenApiService {
    private readonly openApiFileGenerator;
    private readonly openApiClientGenerator;
    constructor(openApiFileGenerator: OpenApiFileGeneratorService, openApiClientGenerator: OpenApiClientGeneratorService);
    configure(app: INestApplication, documentBuilder: DocumentBuilder, toolsOptions: OpenApiOptions, swaggerOptions: SwaggerDocumentOptions): Promise<void>;
    private enableDocumentationWebServer;
    private generateOpenApiFile;
    private generateClient;
}
