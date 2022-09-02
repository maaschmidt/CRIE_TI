const {DataTypes, Model} = require('sequelize');
const db = require('../db');

class Event extends Model { };

Event.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  end_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  modality: {
    type: DataTypes.STRING,
    allowNull: false
  },
  location: {
    type: DataTypes.STRING,
    allowNull: true
  },
  ticket_value: {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  min_members: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  max_members: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  holiday: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
}, {
  sequelize: db,
  tableName: 'events',
  modelName: 'Event'
});

module.exports = Event;