const client = require("../../aulas/aula05/postgres/database.js");
const dbQuery = require("../../aulas/aula05/postgres/dbQuery.js");

async function dbInsert(table, params){
  for (let i = 0; i < params.length; i++) {
    let data = params[i];
    
    let columns = (Object.keys(data).join(","));
    let content = (Object.values(data));
    
    let values ="";
    for (let i = 1; i <= content.length; i++) {
      values += " $"+i+",";
    }
    values = values.slice(1, -1);
    
    let sql = (`INSERT INTO ${table} (${columns}) VALUES (${values})`);
    await dbQuery(sql, content);
  }
  client.end();
}

module.exports = dbInsert;