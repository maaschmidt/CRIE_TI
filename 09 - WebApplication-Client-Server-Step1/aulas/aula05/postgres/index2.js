const dbInsert = require("./dbinsert2.js");

let tableName = "teste"
let dados = [{
  nome: "Marcel",
  sobrenome: "Schmidt"
},{
  nome: "Ariele",
  sobrenome: "Marques"
},{
  nome: "Juca",
  sobrenome: "Bala"
}]

async function main(){
  for (let i = 0; i < dados.length; i++) {
    let dado = dados[i];
    let resultado = await dbInsert("teste", dado);
    console.log(resultado);
  }
  client.end();
}
main();
