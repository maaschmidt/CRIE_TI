const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('./sequelize.js');

const Product = sequelize.define('Product', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    valor:{
        type: DataTypes.DECIMAL
        // allowNull defaults to true
    }
},{
    tableName: "produto",
    timestamps: false
});
// 'sequelize.define' also returns the model
console.log(Product === sequelize.models.Product);

module.exports = Product;