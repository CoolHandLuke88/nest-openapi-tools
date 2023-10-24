import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerDocumentOptions } from '@nestjs/swagger';
import { OpenApiOptions } from './openapi.service';
export declare class OpenApiNestFactory {
    static configure(app: INestApplication, documentBuilder: DocumentBuilder, toolsOptions?: OpenApiOptions, swaggerOptions?: SwaggerDocumentOptions): Promise<void>;
}
