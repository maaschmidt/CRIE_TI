const Sequelize = require("sequelize");
const sequelize = require("./sequelize.js");
const Feriado = require("./feriado.js");
const fetch = require("node-fetch")

async function main() {
  const ano = 2022
  const urlAPI = `https://brasilapi.com.br/api/feriados/v1/${ano}`;
   
  const response = await fetch(urlAPI);
  const result = await response.json(response);
  console.log(result);
  
  (async () => {
    await Feriado.sync({force:true});

    result.forEach(async feriado => {
       await Feriado.create(feriado);
    });
  })();
};
main();
