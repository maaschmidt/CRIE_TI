const client = require("./database.js");
const dbQuery = require("./dbQuery.js");

async function dbDelete(tableName, obj){
  let id;
  if (typeof(obj) == Object){
    id = obj.id;
  } else {
    id = obj;
  }
  
  let sql = (`DELETE FROM ${tableName} WHERE id = ${id}`);
  
  return await dbQuery(sql);
}

module.exports = dbDelete;