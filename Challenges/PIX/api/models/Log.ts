import { Sequelize, DataTypes, Model } from "sequelize";
import { sequelize } from "../db/database";

export class Log extends Model {
  declare id: number;
  declare sender: string;
  declare recipient: string;
  declare value: number;
  declare date: any;
}

Log.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  sender: {
    type: DataTypes.STRING,
    allowNull: false
  },
  recipient: {
    type: DataTypes.STRING,
    allowNull: false
  },
  value:{
    type: DataTypes.DECIMAL(10,2),
    allowNull: false
  }
},{
  sequelize,
  modelName: 'Logs',
  freezeTableName: true,
  tableName: 'logs',
  createdAt: true,
  updatedAt: false
});