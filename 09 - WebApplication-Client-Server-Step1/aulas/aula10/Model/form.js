const {Sequelize, DataTypes, Model} = require('sequelize');
const sequelize = require('../sequelize.js');

class Form extends Model { }

Form.init({
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    mensagem:{
        type: DataTypes.STRING
    }
},{
    sequelize,
    modelName: "Form",
    tableName: "form",
    timestamps: true,
    createAt: "criado",
    updateAt: "alteracao"
});

Form.sync();
module.exports = Form;