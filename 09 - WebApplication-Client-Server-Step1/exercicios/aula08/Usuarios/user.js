const {Sequelize, DataTypes, Model} = require('sequelize');
const sequelize = require('../Feriados/sequelize.js');

class User extends Model {
    // static alerta(){
    //     console.log("Alerta")
    // }
    // getFullName(){
    //     return `${this.firstName} ${this.lastName} - ${this.birthDate}`;
    // }
}

User.init({
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName:{
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    birthDate: {
        type: DataTypes.DATEONLY,
    }
},{
    sequelize,
    modelName: "User",
    tableName: "user",
    timestamps: true,
    createAt: "criado",
    updateAt: "alteracao"
});

console.log(User === sequelize.models.User);

module.exports = User;