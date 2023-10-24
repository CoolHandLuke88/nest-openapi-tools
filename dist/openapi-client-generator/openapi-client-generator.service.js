"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenApiClientGeneratorService = void 0;
const common_1 = require("@nestjs/common");
const child_process_1 = require("child_process");
let OpenApiClientGeneratorService = class OpenApiClientGeneratorService {
    async generateClient(options) {
        var _a;
        if (!((_a = options.outputFolderPath) === null || _a === void 0 ? void 0 : _a.length)) {
            throw new Error('Client output directory was not set.');
        }
        await new Promise((resolve, reject) => {
            var _a, _b;
            const command = [
                `npx openapi-generator-cli generate`,
                `-g ${options.type}`,
                `-i \"${options.openApiFilePath}\"`,
                `-o \"${options.outputFolderPath}\"`,
                ((_a = options === null || options === void 0 ? void 0 : options.additionalProperties) === null || _a === void 0 ? void 0 : _a.length)
                    ? `--additional-properties=\"${options.additionalProperties}\"`
                    : '',
                ((_b = options === null || options === void 0 ? void 0 : options.globalProperty) === null || _b === void 0 ? void 0 : _b.length)
                    ? `--global-property=\"${options.globalProperty}\"`
                    : '',
                (options === null || options === void 0 ? void 0 : options.skipValidation) ? `--skip-validate-spec` : '',
            ].join(' ');
            const cmd = (0, child_process_1.spawn)(command, { stdio: 'inherit', shell: true });
            cmd.on('error', () => reject(`Error running openapi-generator-cli command.`));
            cmd.on('exit', resolve);
        });
    }
};
exports.OpenApiClientGeneratorService = OpenApiClientGeneratorService;
exports.OpenApiClientGeneratorService = OpenApiClientGeneratorService = __decorate([
    (0, common_1.Injectable)()
], OpenApiClientGeneratorService);
//# sourceMappingURL=openapi-client-generator.service.js.map