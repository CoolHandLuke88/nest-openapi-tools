"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenApiService = void 0;
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const openapi_file_generator_service_1 = require("./openapi-file-generator/openapi-file-generator.service");
const openapi_client_generator_service_1 = require("./openapi-client-generator/openapi-client-generator.service");
let OpenApiService = class OpenApiService {
    constructor(openApiFileGenerator, openApiClientGenerator) {
        this.openApiFileGenerator = openApiFileGenerator;
        this.openApiClientGenerator = openApiClientGenerator;
    }
    async configure(app, documentBuilder, toolsOptions, swaggerOptions) {
        var _a, _b, _c;
        const document = swagger_1.SwaggerModule.createDocument(app, documentBuilder.build(), swaggerOptions);
        if ((_a = toolsOptions === null || toolsOptions === void 0 ? void 0 : toolsOptions.webServerOptions) === null || _a === void 0 ? void 0 : _a.enabled) {
            this.enableDocumentationWebServer(app, document, toolsOptions.webServerOptions);
        }
        if ((_b = toolsOptions === null || toolsOptions === void 0 ? void 0 : toolsOptions.fileGeneratorOptions) === null || _b === void 0 ? void 0 : _b.enabled) {
            await this.generateOpenApiFile(document, toolsOptions.fileGeneratorOptions);
        }
        if ((_c = toolsOptions === null || toolsOptions === void 0 ? void 0 : toolsOptions.clientGeneratorOptions) === null || _c === void 0 ? void 0 : _c.enabled) {
            await this.generateClient(toolsOptions.clientGeneratorOptions);
        }
    }
    async enableDocumentationWebServer(app, document, options) {
        var _a;
        swagger_1.SwaggerModule.setup((_a = options.path) !== null && _a !== void 0 ? _a : 'apidocs', app, document);
    }
    async generateOpenApiFile(document, options) {
        await this.openApiFileGenerator.generateOpenApiFile(options, document);
    }
    async generateClient(options) {
        await this.openApiClientGenerator.generateClient(options);
    }
};
exports.OpenApiService = OpenApiService;
exports.OpenApiService = OpenApiService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [openapi_file_generator_service_1.OpenApiFileGeneratorService,
        openapi_client_generator_service_1.OpenApiClientGeneratorService])
], OpenApiService);
//# sourceMappingURL=openapi.service.js.map