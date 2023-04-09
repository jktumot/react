const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("Infobase", "postgres", "postgresFox2017", {
  dialect: "postgres",
  host: "localhost",
  port: 5433,
});
module.exports = sequelize;

