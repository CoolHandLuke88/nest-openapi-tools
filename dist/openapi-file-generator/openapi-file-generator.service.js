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
exports.OpenApiFileGeneratorService = void 0;
const common_1 = require("@nestjs/common");
const fs_1 = require("fs");
const path_1 = require("path");
const aws_extensions_service_1 = require("../aws-extensions/aws-extensions.service");
let OpenApiFileGeneratorService = class OpenApiFileGeneratorService {
    constructor(awsExtensionsService) {
        this.awsExtensionsService = awsExtensionsService;
    }
    async generateOpenApiFile(options, openApiDoc) {
        var _a, _b, _c, _d, _e, _f, _g;
        if (!((_a = options.outputFilePath) === null || _a === void 0 ? void 0 : _a.length)) {
            throw new Error('outputFilePath is not defined.');
        }
        if ((_b = options === null || options === void 0 ? void 0 : options.aws) === null || _b === void 0 ? void 0 : _b.enabled) {
            this.awsExtensionsService.addApiGatewayIntegrations(options.aws, openApiDoc);
            if ((_d = (_c = options === null || options === void 0 ? void 0 : options.aws) === null || _c === void 0 ? void 0 : _c.apiGatewayExtensionOptions) === null || _d === void 0 ? void 0 : _d.addPolicy) {
                this.awsExtensionsService.addApiGatewayPolicyExtension(options.aws, openApiDoc);
            }
            if ((_f = (_e = options === null || options === void 0 ? void 0 : options.aws) === null || _e === void 0 ? void 0 : _e.apiGatewayExtensionOptions) === null || _f === void 0 ? void 0 : _f.vpceIdParamName) {
                this.awsExtensionsService.addVpceServerExtension(options.aws, openApiDoc);
            }
        }
        const swaggerDoc = JSON.parse(JSON.stringify(openApiDoc));
        if (!(swaggerDoc === null || swaggerDoc === void 0 ? void 0 : swaggerDoc.components) || !((_g = swaggerDoc === null || swaggerDoc === void 0 ? void 0 : swaggerDoc.components) === null || _g === void 0 ? void 0 : _g.schemas)) {
            delete swaggerDoc.components;
        }
        const fullPath = (0, path_1.join)(process.cwd(), options.outputFilePath);
        if (fullPath.toLocaleLowerCase().endsWith('.yaml')) {
            const yaml = await Promise.resolve().then(() => require('yaml'));
            const swaggerYaml = yaml
                .stringify(swaggerDoc)
                .replace(`Version: 2012-10-17`, `Version: '2012-10-17'`);
            (0, fs_1.writeFileSync)(fullPath, swaggerYaml);
        }
        else {
            const swaggerJson = JSON.stringify(swaggerDoc);
            (0, fs_1.writeFileSync)(fullPath, swaggerJson);
        }
    }
};
exports.OpenApiFileGeneratorService = OpenApiFileGeneratorService;
exports.OpenApiFileGeneratorService = OpenApiFileGeneratorService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [aws_extensions_service_1.AwsExtensionsService])
], OpenApiFileGeneratorService);
//# sourceMappingURL=openapi-file-generator.service.js.map