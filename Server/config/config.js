module.exports = {
  development: {
    username: process.env.DEV_DB_USERNAME_1,
    password: process.env.DEV_DB_PASSWORD_1,
    database: process.env.DEV_DB_NAME_1,
    host: process.env.DEV_HOST_NAME_1,
    port: process.env.DEV_DB_PORT_1,
    dialect: process.env.DEV_DIALECT_1 || "mysql",
  },
  test: {
    username: process.env.TEST_DB_USERNAME_1,
    password: process.env.TEST_DB_PASSWORD_1,
    database: process.env.TEST_DB_NAME_1,
    host: process.env.TEST_HOST_NAME_1,
    port: process.env.TEST_DB_PORT_1,
    dialect: process.env.TEST_DIALECT_1 || "mysql",
  },
  production: {
    username: process.env.PROD_DB_USERNAME_1,
    password: process.env.PROD_DB_PASSWORD_1,
    database: process.env.PROD_DB_NAME_1,
    host: process.env.PROD_HOST_NAME_1,
    port: process.env.PROD_DB_PORT_1,
    dialect: process.env.PROD_DIALECT_1 || "mysql",
  },
};
