const client = require("./database.js");
const dbQuery = require("./dbQuery.js");


async function dbInsert(tableName, obj){
  let columns = (Object.keys(obj).join(","));
  let content = (Object.values(obj));
    
  let dollar =[];
  for (let i = 1; i <= content.length; i++) {
    dollar.push(`$${i+1}`)
  }
  dollar = dollar.join(",")
  
  let sql = (`INSERT INTO ${tableName} (${columns}) VALUES (${dollar}) RETURNING id`);
  let resultado = await dbQuery(sql, content);

  return resultado;
}

module.exports = dbInsert;