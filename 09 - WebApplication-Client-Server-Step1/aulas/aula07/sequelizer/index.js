const Sequelize = require("sequelize");
const sequelize = require("./sequelize.js");
const Product = require("./product.js");

(async () => {
    console.log("funfou");
    await Product.sync({});
    // await User.drop();

    const product = Product.build({
        nome: "Bolinha",
        valor: 10.50
    });

    console.log(`Is ${product.nome} a product = ${(product instanceof Product)}`); //true
    await product.save();

    // product.nome = "Outro nome";
    // product.valor = outro valor;
    // await user.save();

    // await user.update({nome:"Outro nome", valor: outro valor});

    // user.destroy();
})();