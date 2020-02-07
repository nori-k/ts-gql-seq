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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const models_1 = require("../models");
let AddUserInput = class AddUserInput {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], AddUserInput.prototype, "name", void 0);
AddUserInput = __decorate([
    type_graphql_1.InputType({ description: "New User Argument" })
], AddUserInput);
let UpdateUserInput = class UpdateUserInput {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "name", void 0);
UpdateUserInput = __decorate([
    type_graphql_1.InputType({ description: "Update User Argument" })
], UpdateUserInput);
let TodoAppResolver = class TodoAppResolver {
    async user(id) {
        return models_1.User.findByPk(id);
    }
    async addUser(newUser, ctx) {
        return models_1.User.create(newUser);
    }
    async updateUser(updateUser, ctx) {
        return models_1.User.update(updateUser, {
            where: {
                id: updateUser.id
            }
        });
    }
};
__decorate([
    type_graphql_1.Query(returns => models_1.User, { nullable: true }),
    __param(0, type_graphql_1.Arg("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TodoAppResolver.prototype, "user", null);
__decorate([
    type_graphql_1.Mutation(returns => models_1.User),
    __param(0, type_graphql_1.Arg("data")),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AddUserInput, Object]),
    __metadata("design:returntype", Promise)
], TodoAppResolver.prototype, "addUser", null);
__decorate([
    type_graphql_1.Mutation(returns => [type_graphql_1.Int, [models_1.User]]),
    __param(0, type_graphql_1.Arg("data")),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UpdateUserInput, Object]),
    __metadata("design:returntype", Promise)
], TodoAppResolver.prototype, "updateUser", null);
TodoAppResolver = __decorate([
    type_graphql_1.Resolver()
], TodoAppResolver);
exports.TodoAppResolver = TodoAppResolver;
//# sourceMappingURL=user.js.map