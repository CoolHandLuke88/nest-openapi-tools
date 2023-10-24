"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsExtensionsService = void 0;
const common_1 = require("@nestjs/common");
let AwsExtensionsService = class AwsExtensionsService {
    addApiGatewayIntegrations(options, openApiDoc) {
        const routeKeys = Object.keys(openApiDoc.paths);
        routeKeys.forEach(routeKey => {
            const methodKeys = Object.keys(openApiDoc.paths[routeKey]);
            methodKeys.forEach(methodKey => {
                openApiDoc.paths[routeKey][methodKey]['x-amazon-apigateway-integration'] = {
                    type: 'AWS_PROXY',
                    httpMethod: 'POST',
                    uri: {
                        'Fn::Sub': [
                            'arn:${AWS::Partition}:apigateway:${AWS::Region}:lambda:path/2015-03-31/functions/',
                            'arn:${AWS::Partition}:lambda:${AWS::Region}:${AWS::AccountId}:function:',
                            `\${${options.apiGatewayExtensionOptions.lambdaResourceName}}/invocations`,
                        ].join(''),
                    },
                };
            });
        });
    }
    addVpceServerExtension(options, openApiDoc) {
        var _a;
        const openApiDocServers = openApiDoc.servers || [];
        if (!openApiDocServers.find(server => server['x-amazon-apigateway-endpoint-configuration'])) {
            openApiDoc.servers.push({
                'x-amazon-apigateway-endpoint-configuration': {
                    vpcEndpointIds: [
                        { Ref: (_a = options.apiGatewayExtensionOptions) === null || _a === void 0 ? void 0 : _a.vpceIdParamName },
                    ],
                },
            });
        }
    }
    addApiGatewayPolicyExtension(options, openApiDoc) {
        const policyExtension = openApiDoc['x-amazon-apigateway-policy'];
        if (!policyExtension) {
            openApiDoc['x-amazon-apigateway-policy'] = {
                Version: '2012-10-17',
                Statement: [
                    {
                        Effect: 'Allow',
                        Principal: '*',
                        Action: 'execute-api:Invoke',
                        Resource: '*',
                    },
                ],
            };
        }
    }
};
exports.AwsExtensionsService = AwsExtensionsService;
exports.AwsExtensionsService = AwsExtensionsService = __decorate([
    (0, common_1.Injectable)()
], AwsExtensionsService);
//# sourceMappingURL=aws-extensions.service.js.map