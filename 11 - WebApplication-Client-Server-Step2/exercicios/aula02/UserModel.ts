import { Sequelize, DataTypes, Model } from "sequelize";
import { sequelize } from "./sequelize";

export class User extends Model {
  declare firstName: string;
  declare lastName: string;
  declare birthday: string;


  getFullName() {
    return [this.firstName, this.lastName].join(" ");
  }
}

User.init({
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName:{
    type: DataTypes.STRING,
    allowNull: false
  },
  birthday:{
    type: DataTypes.STRING,
    allowNull: true
  }
},{
  sequelize,
  modelName: 'UserTS',
  freezeTableName: true,
  tableName: 'userTS',
  timestamps: true
});

