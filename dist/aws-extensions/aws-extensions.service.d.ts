import { OpenAPIObject } from '@nestjs/swagger';
export interface AwsExtensionsOptions {
    enabled: boolean;
    apiGatewayExtensionOptions?: {
        enabled: boolean;
        lambdaResourceName: string;
        vpceIdParamName?: string;
        addPolicy?: boolean;
    };
}
export declare class AwsExtensionsService {
    addApiGatewayIntegrations(options: AwsExtensionsOptions, openApiDoc: OpenAPIObject): void;
    addVpceServerExtension(options: AwsExtensionsOptions, openApiDoc: OpenAPIObject): void;
    addApiGatewayPolicyExtension(options: AwsExtensionsOptions, openApiDoc: OpenAPIObject): void;
}
