import { Dialect, Sequelize } from "sequelize";
require('dotenv').config();

const db_database = process.env.DB_DATABSE as string;
const db_username = process.env.DB_USERNAME as string;
const db_password = process.env.DB_PASSWORD as string;
const db_host = process.env.DB_HOST;
const db_port : number = parseInt(process.env.DB_PORT as string);
const db_dialect = process.env.DB_DIALECT as Dialect;

export const db = new Sequelize(db_database, db_username, db_password, {
  host: db_host,
  port: db_port,
  dialect: db_dialect
});

db.sync();