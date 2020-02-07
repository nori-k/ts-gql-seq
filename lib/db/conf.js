"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.sequelize = new sequelize_1.Sequelize("example", "example", "example", {
    dialect: "mysql",
    host: "localhost",
    port: 3306
});
//# sourceMappingURL=conf.js.map