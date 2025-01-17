const { Sequelize } = require("sequelize");
const mysql2 = require("mysql2");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const env = process.env.NODE_ENV || "development";
const config = require("./config")[env];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    port: config.port,
    dialect: config.dialect,
    dialectModule: mysql2,
    dialectOptions: {
      connectTimeout: 90000,
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    logging: console.log,
  }
);

// Test DB connection
sequelize
  .authenticate()
  .then(() =>
    console.log("Database connection has been established successfully.")
  )
  .catch((err) => console.error("Unable to connect to the database:", err));

module.exports = sequelize;
