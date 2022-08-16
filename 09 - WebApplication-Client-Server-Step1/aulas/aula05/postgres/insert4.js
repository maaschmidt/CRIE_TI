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
    let colunas = (Object.keys(produto).join(","));
    console.log(colunas);
    let valores = (Object.values(produto));
    let values ="";
    for (let i = 1; i <= valores.length; i++) {
      values += "$"+i+",";
    }
    values = values.slice(0, -1);
    console.log(values);
    let sql = (`INSERT INTO produto (${colunas}) VALUES (${values})`);
    console.log(sql);
    let resultado = await dbQuery(sql, [produto.nome, produto.valor]);
  }

  client.end();
}

main();
