import { OpenAPIObject } from '@nestjs/swagger';
import { AwsExtensionsOptions, AwsExtensionsService } from '../aws-extensions/aws-extensions.service';
export interface OpenApiFileGeneratorOptions {
    enabled: boolean;
    outputFilePath: string;
    aws?: AwsExtensionsOptions;
}
export declare class OpenApiFileGeneratorService {
    private readonly awsExtensionsService;
    constructor(awsExtensionsService: AwsExtensionsService);
    generateOpenApiFile(options: OpenApiFileGeneratorOptions, openApiDoc: OpenAPIObject): Promise<void>;
}
