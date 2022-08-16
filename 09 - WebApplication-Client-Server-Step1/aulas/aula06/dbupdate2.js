const client = require("./database.js");
const dbQuery = require("./dbQuery.js");


async function dbUpdate(tableName, obj){
  let keys = (Object.keys(obj));
  let content = (Object.values(obj));
  let columns = [];

  for (let i = 1; i <= keys.length; i++) {
    let key = keys[i];
    columns.push(`${key} = $${i}`);
  }
  columns = columns.join(", ");
  let ref = `$${content.length+1}`;
  content.push(obj.id);

  
  let sql = (`UPDATE ${tableName} SET ${columns} WHERE id = ${ref} RETURNING id`);
  
  return await dbQuery(sql, content);
}


module.exports = dbUpdate;