import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("example", "example", "example", {
  dialect: "mysql",
  host: "localhost",
  port: 3306
});
