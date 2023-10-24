"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenApiToolsModule = void 0;
const common_1 = require("@nestjs/common");
const aws_extensions_service_1 = require("./aws-extensions/aws-extensions.service");
const openapi_client_generator_service_1 = require("./openapi-client-generator/openapi-client-generator.service");
const openapi_file_generator_service_1 = require("./openapi-file-generator/openapi-file-generator.service");
const openapi_service_1 = require("./openapi.service");
let OpenApiToolsModule = class OpenApiToolsModule {
};
exports.OpenApiToolsModule = OpenApiToolsModule;
exports.OpenApiToolsModule = OpenApiToolsModule = __decorate([
    (0, common_1.Module)({
        providers: [
            aws_extensions_service_1.AwsExtensionsService,
            openapi_service_1.OpenApiService,
            openapi_file_generator_service_1.OpenApiFileGeneratorService,
            openapi_client_generator_service_1.OpenApiClientGeneratorService,
        ],
        exports: [openapi_service_1.OpenApiService],
    })
], OpenApiToolsModule);
//# sourceMappingURL=openapi-tools.module.js.map