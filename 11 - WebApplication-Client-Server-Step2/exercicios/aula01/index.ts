// const client = require("./database.js");
import { db } from "./database";
// const dbQuery = require("./dbQuery.js");
import { dbQuery } from "./dbQuery";

//Método com await(preferido do professor)
async function main() {
  //METODO QU IMPRIME UMA TABELA COM TODOS PRODUTOS JUNTOS E APÓS DE CADA VEZ
  let resultado: [] = await dbQuery("SELECT * FROM produto");
  console.table(resultado);

  for (const result of resultado) {
    console.table(result);
  }

  //METODO PARA IMPRIMIR UM PRODUTO ESPECÍFICO
  // let id = 3;
  // let sql = "SELECT * FROM produto WHERE id = $1;";
  // let resultado2 = await dbQuery(sql, [id]);

  // console.table(resultado2);

  db.end();
}
main();