const Sequelize = require("sequelize");
const sequelize = require("./sequelize.js");
const Cliente = require("./cliente.js");
const clientes = require("./clientes.js");

(async () => {

    await Cliente.sync({ force: true });

    try {
        const cliente = await Cliente.create({
            "nomeRazao": "Mercado do Juca Ltda ",
            "nomeFantasia": "Mercado do Juca ",
            "cpfCnpj": " 00.111.222/0001-33 ",
            "nascFundacao": 1980 - 05 - 18,
            "telefone": " (51) 3333-3333 ",
            "celular": " (51) 99999-9999 "
        });
    } catch (error) {
        console.error(error.message)
    }
})();


