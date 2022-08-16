const client = require("./database.js");
const dbQuery = require("./dbQuery.js");

let id = 1;

// dbQuery("SELECT * FROM produto WHERE id = $1;", [id]).then((result) => {
//   console.log(result);
// })
//.then(() => {
//  client.query("SELECT * FROM produto WHERE id = 1").then((result) => {
//   console.log(result.rows);
//  })
//})
// .finally(() => {
//   client.end();
// });


//Método com await(preferido do professor)
async function main() {
  let resultado = await dbQuery("SELECT * FROM produto");
  console.log(resultado);

  let id = 1;
  let sql = "SELECT * FROM produto WHERE id = $1;";
  let resultado2 = await dbQuery(sql, [id]);

  console.table(resultado2);

  client.end();
}
main();