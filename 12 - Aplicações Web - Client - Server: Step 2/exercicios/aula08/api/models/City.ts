import { DataTypes, Model } from 'sequelize';
import db from '../db';
import State from './State';

class City extends Model {
  declare name: string;
  declare StateId: number;
};

City.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  StateId: {
    type: DataTypes.INTEGER,
    references: {
      model: State,
      key: 'id'
    }
  }
}, {
  sequelize: db,
  tableName: 'cities',
  modelName: 'City'
});

// Doc: https://sequelize.org/docs/v6/core-concepts/assocs/#one-to-many-relationships
State.hasMany(City);
City.belongsTo(State);

export default City;
