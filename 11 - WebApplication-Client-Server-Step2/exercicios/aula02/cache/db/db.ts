import * as dotenv from "dotenv";
dotenv.config();
import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(process.env.DB_DATABASE ?? '', process.env.DB_USERNAME ?? '', process.env.DB_PASSWORD ?? '', {
  host: process.env.HOST ?? '',
  port: 5432,
  dialect: 'postgres'
});