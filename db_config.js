const Sequelize = require("sequelize");
require("dotenv").config();

const database = process.env.DB_DATABASE;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const port = process.env.DB_PORT;
const db_server = process.env.DB_HOST;

const sequelize = new Sequelize(database, username, password, {
  host: db_server,
  port: port,
  dialect: "mysql",
  dialectOptions: {
    connectTimeout: 4000000
  },
  pool: {
    max: 1000,
    min: 0,
    idle: 900000
  },

});

const connect = async () => {
  await sequelize
      .authenticate()
      .then(() => {
        console.log("Connection has been established successfully.");
      })
      .catch(err => {
        console.log("Unable to connect to the database:", err.message);
      });
};
const db = {
  sequelize: sequelize,
  connect
};

module.exports = db;
