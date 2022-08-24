const Sequelize = require("sequelize");
const sequelize = require("./sequelize.js");
const Feriado = require("./feriado.js");
const fetch = require("node-fetch")

async function main() {
  for (let i = 1900; i <= 2199; i++) {
    const urlAPI = `https://brasilapi.com.br/api/feriados/v1/${i}`;
    
    const response = await fetch(urlAPI);
    const result = await response.json(response);
    console.log(result);
    
    if (response.status != 202){
      (async () => {
        await Feriado.sync({});
        result.forEach(async feriado => {
        await Feriado.create(feriado);
        });
      })();
    };
  }   
}
main();
