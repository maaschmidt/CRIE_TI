import { Sequelize, DataTypes, Model } from "sequelize";
import { database } from '../db/database'

export class Vote extends Model {
  declare id: Number;
  declare candidate: Number;
  declare role: string;
  declare party: string;
}

Vote.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  candidate: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false
  },
  party:{
    type: DataTypes.STRING,
    allowNull: false
  }
},{
  sequelize: database,
  modelName: 'Votes',
  freezeTableName: true,
  tableName: 'votes',
  timestamps: true
});