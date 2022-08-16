const client = require("./database.js");
const dbQuery = require("./dbQuery.js");

async function main() {
  let produto = {
    nome: "Bola d+",
    valor: 189.90
  }

  let sql = (`INSERT INTO produto (nome, valor) VALUES ($1, $2)`);
  console.log(sql);
  let resultado = await dbQuery(sql, [produto.nome, produto.valor]);

  client.end();
}

main();