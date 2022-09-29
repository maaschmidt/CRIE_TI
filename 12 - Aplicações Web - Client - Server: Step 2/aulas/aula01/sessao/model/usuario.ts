import { Sequelize, DataTypes, Model } from 'sequelize';
import database from '../db/database'

export class Usuario extends Model {
  static async localizaUsuario(email: string, senha: string)
  {
    return await Usuario.findOne({
      where: {
        email: email,
        senha: senha
      }
    });
  }
}

Usuario.init({
  nome: {
    type: DataTypes.STRING
  },
  senha: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  }
},{
  sequelize: database,
  modelName: 'Usuario',
  freezeTableName: true,
  tableName: 'usuarios',
  timestamps: true,
  createdAt: 'criacao',
  updatedAt: 'alteracao'
});