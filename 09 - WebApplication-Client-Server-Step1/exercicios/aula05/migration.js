const client = require("../../aulas/aula05/postgres/database.js");
const dbQuery = require("../../aulas/aula05/postgres/dbQuery.js");

let sql = [];
sql.push("DROP TABLE IF EXISTS produto;");
sql.push("CREATE TABLE \"produto\" (\"id\" SERIAL, \"nome\" VARCHAR(250) NOT NULL, \"valor\" NUMERIC(10,2) NULL DEFAULT NULL);");
sql.push("COMMENT ON COLUMN \"produto\".\"id\" IS 'Código';");
sql.push("COMMENT ON COLUMN \"produto\".\"nome\" IS 'Nome';");
sql.push("COMMENT ON COLUMN \"produto\".\"valor\" IS 'Valor';");
sql.push("INSERT INTO produto (nome,valor) VALUES('Bola quadrada',89.56) RETURNING id;");
sql.push("INSERT INTO produto (nome,valor) VALUES('Bola Redonda',15.56) RETURNING id;");
sql.push("SELECT * FROM produto");

async function main() {
  for (let i = 0; i < sql.length; i++) {
    console.log(sql[i]);
    console.table(await dbQuery(sql[i]));
  }
    client.end();
};

main();