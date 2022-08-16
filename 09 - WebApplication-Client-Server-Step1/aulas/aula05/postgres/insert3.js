const client = require("./database.js");
const dbQuery = require("./dbQuery.js");

async function main() {
  let produtos = [{
    nome: "Bola top",
    valor: 289.90
  },{
    nome: "Bola muito top",
    valor: 389.90    
  }]

  for (let i = 0; i < produtos.length; i++) {
    let produto = produtos[i];
    let sql = (`INSERT INTO produto (nome, valor) VALUES ($1, $2)`);
    console.log(sql);
    let resultado = await dbQuery(sql, [produto.nome, produto.valor]);
  }

  client.end();
}

main();