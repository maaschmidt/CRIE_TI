const client = require("./database.js");
const dbQuery = require("./dbQuery.js");


async function dbUpdate(tableName, obj){
  let id = obj.id;
  delete obj.id;
  let columns = (Object.keys(obj));
  let content = (Object.values(obj));
  // console.log(content);

  let dollar =[];
  for (let i = 1; i <= content.length; i++) {
    dollar.push(`$${i}`)
  }
  // console.log(dollar)
  
  let sql = (`UPDATE ${tableName} SET ${columns[0]}=${dollar[0]},${columns[1]}=${dollar[1]} WHERE id = ${id} RETURNING id`);
  // console.log(sql)
  let resultado = await dbQuery(sql, content);

  return resultado;
}


module.exports = dbUpdate;