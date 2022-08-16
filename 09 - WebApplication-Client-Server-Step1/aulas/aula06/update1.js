const client = require("./database.js");
const dbQuery = require("./dbQuery.js");

async function main() {
  let nome = "Update1";
  let valor = 88.88

  let sql = (`UPDATE produto SET nome = $1, valor = $2 where id = 1`);
  let resultado = await dbQuery(sql, [nome, valor]);

  client.end();
}

main();