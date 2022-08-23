const {Sequelize, DataTypes, Model} = require('sequelize');
const sequelize = require('./sequelize.js');

class User extends Model {
    static alerta(){
        console.log("Alerta")
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

User.init({
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName:{
        type: DataTypes.STRING
        // allowNull defaults to true
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