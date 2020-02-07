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
const type_graphql_1 = require("type-graphql");
const sequelize_1 = require("sequelize");
const user_1 = require("./user");
const conf_1 = require("../db/conf");
let Todo = class Todo extends sequelize_1.Model {
};
__decorate([
    type_graphql_1.Field(type => type_graphql_1.ID),
    __metadata("design:type", String)
], Todo.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(type => user_1.User),
    __metadata("design:type", user_1.User)
], Todo.prototype, "user", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Todo.prototype, "title", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Todo.prototype, "content", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Date)
], Todo.prototype, "createdAt", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Date)
], Todo.prototype, "updatedAt", void 0);
Todo = __decorate([
    type_graphql_1.ObjectType()
], Todo);
exports.Todo = Todo;
Todo.init({
    id: {
        type: sequelize_1.UUID,
        defaultValue: sequelize_1.UUIDV1,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: sequelize_1.STRING,
        allowNull: false
    },
    content: sequelize_1.STRING
}, {
    sequelize: conf_1.sequelize,
    modelName: "todo"
});
//# sourceMappingURL=todo.js.map