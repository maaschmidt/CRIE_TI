const client = require("./database.js");
const dbQuery = require("./dbQuery.js");

async function main() {
  let produtos = [{
    id: 2,
    nome: "Update2",
    valor: 22.22
  },{
    id: 4,
    nome: "Update3",
    valor: 33.33
  }]
  
for (let i = 0; i < produtos.length; i++) {
  let dado = produtos[i];
    
  let sql = (`UPDATE produto SET nome = $1, valor = $2 where id = $3`);
  let resultado = await dbQuery(sql, [dado.nome, dado.valor, dado.id]);
  
}
  client.end();
}

main();