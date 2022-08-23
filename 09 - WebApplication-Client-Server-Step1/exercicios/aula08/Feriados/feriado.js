const {Sequelize, DataTypes, Model} = require('sequelize');
const sequelize = require('./sequelize.js');

class Feriado extends Model {
    // static alerta(){
    //     console.log("Alerta")
    // }
    // getFullName(){
    //     return `${this.firstName} ${this.lastName} - ${this.birthDate}`;
    // }
}

Feriado.init({
    date:{
        type: DataTypes.DATEONLY
        // allowNull defaults to true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
    }
},{
    sequelize,
    modelName: "Feriado",
    tableName: "feriado",
    timestamps: true,
    createAt: "criado",
    updateAt: "alteracao"
});

console.log(Feriado === sequelize.models.Feriado);

module.exports = Feriado;