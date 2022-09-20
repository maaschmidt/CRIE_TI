import { Sequelize, DataTypes, Model } from "sequelize";
import { sequelize } from "../db/database";

export class Frete extends Model {
  declare id: number;
  declare params: string;
  declare codigo: number;
  declare valor: number;
  declare prazo_entrega: number;
  declare valor_sem_adicionais: number;
  declare valor_mao_propria: number;
  declare valor_aviso_recebimento: number;
  declare valor_declarado: number;
  declare entrega_domiciliar: string;
  declare entrega_sabado: string;
  declare erro: number;
}

Frete.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  params: {
    type: DataTypes.STRING,
    allowNull: false
  },
  codigo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  valor:{
    type: DataTypes.STRING,
    allowNull: false
  },
  prazo_entrega:{
    type: DataTypes.STRING,
    allowNull: false
  },
  valor_sem_adicionais:{
    type: DataTypes.STRING,
    allowNull: true
  },
  valor_mao_propria:{
    type: DataTypes.STRING,
    allowNull: true
  },
  valor_aviso_recebimento:{
    type: DataTypes.STRING,
    allowNull: true
  },
  valor_declarado:{
    type: DataTypes.STRING,
    allowNull: true
  },
  entrega_domiciliar:{
    type: DataTypes.STRING,
    allowNull: false
  },
  entrega_sabado:{
    type: DataTypes.STRING,
    allowNull: false
  },
  erro:{
    type: DataTypes.STRING,
    allowNull: false
  }
},{
  sequelize,
  modelName: 'Frete',
  freezeTableName: true,
  tableName: 'frete',
  timestamps: true
});