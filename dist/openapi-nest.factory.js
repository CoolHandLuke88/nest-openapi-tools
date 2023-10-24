"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenApiNestFactory = void 0;
const core_1 = require("@nestjs/core");
const axios_client_generator_options_1 = require("./openapi-client-generator/axios.client-generator-options");
const openapi_tools_module_1 = require("./openapi-tools.module");
const openapi_service_1 = require("./openapi.service");
class OpenApiNestFactory {
    static async configure(app, documentBuilder, toolsOptions, swaggerOptions) {
        var _a, _b, _c, _d;
        const openApiToolsModule = await core_1.NestFactory.createApplicationContext(openapi_tools_module_1.OpenApiToolsModule);
        if (!toolsOptions) {
            toolsOptions = {};
        }
        if ((_a = toolsOptions === null || toolsOptions === void 0 ? void 0 : toolsOptions.webServerOptions) === null || _a === void 0 ? void 0 : _a.enabled) {
            toolsOptions.webServerOptions = Object.assign({ path: 'api-docs' }, toolsOptions.webServerOptions);
        }
        if ((_b = toolsOptions === null || toolsOptions === void 0 ? void 0 : toolsOptions.fileGeneratorOptions) === null || _b === void 0 ? void 0 : _b.enabled) {
            toolsOptions.fileGeneratorOptions = Object.assign({
                outputFilePath: './openapi.yaml',
            }, toolsOptions.fileGeneratorOptions);
        }
        if ((_c = toolsOptions === null || toolsOptions === void 0 ? void 0 : toolsOptions.clientGeneratorOptions) === null || _c === void 0 ? void 0 : _c.enabled) {
            let outputFolderPath = (_d = toolsOptions === null || toolsOptions === void 0 ? void 0 : toolsOptions.clientGeneratorOptions) === null || _d === void 0 ? void 0 : _d.outputFolderPath;
            if (!(outputFolderPath === null || outputFolderPath === void 0 ? void 0 : outputFolderPath.length)) {
                outputFolderPath = new axios_client_generator_options_1.AxiosClientGeneratorOptions().outputFolderPath;
                try {
                    const title = documentBuilder.build().info.title;
                    if (title.length) {
                        const slugifiedTitle = title
                            .toString()
                            .normalize('NFD')
                            .replace(/[\u0300-\u036f]/g, '')
                            .toLowerCase()
                            .trim()
                            .replace(/\s+/g, '-')
                            .replace(/[^\w-]+/g, '')
                            .replace(/--+/g, '-');
                        outputFolderPath = `../${slugifiedTitle}-client/src`;
                    }
                }
                catch (_e) { }
            }
            toolsOptions.clientGeneratorOptions = new axios_client_generator_options_1.AxiosClientGeneratorOptions(Object.assign({
                outputFolderPath,
            }, toolsOptions.clientGeneratorOptions));
        }
        if (!swaggerOptions) {
            swaggerOptions = {
                operationIdFactory: (controller, method) => method,
            };
        }
        await openApiToolsModule
            .get(openapi_service_1.OpenApiService)
            .configure(app, documentBuilder, toolsOptions, swaggerOptions);
    }
}
exports.OpenApiNestFactory = OpenApiNestFactory;
//# sourceMappingURL=openapi-nest.factory.js.map