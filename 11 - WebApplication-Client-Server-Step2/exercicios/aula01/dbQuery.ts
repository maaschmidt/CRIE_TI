import { db } from "./databasedb";
// const client = require("./database.js");

export async function dbQuery(sql: string, params?: string[]) {
  let resultado = await db.query(sql, params);

  return resultado.rows;
}

// module.exports = dbQuery;