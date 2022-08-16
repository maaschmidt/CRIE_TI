const client = require("./database.js");
const dbUpdate = require("./dbupdate.js");
const dbDelete = require("./dbdelete.js");
const dbSave = require("./dbsave.js");

let tableName = "produto"
let produtos = [{
  id: 2,
  nome: "Bola Quadrada",
  valor: 12.36
},{
  id: 4,
  nome: "Bola Triangular",
  valor: 12.35
}]

async function main(){
  for (let i = 0; i < produtos.length; i++) {
    let dado = produtos[i];
    // let resultado = await dbUpdate(tableName, dado);
    // let resultado = await dbDelete(tableName, 1);
    let resultado = await dbSave(tableName, dado);
    console.log(resultado);
  }
  client.end();
}

main();
