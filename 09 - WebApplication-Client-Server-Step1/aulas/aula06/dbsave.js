const dbUpdate = require("./dbupdate.js");
const dbInsert = require("./dbinsert.js");

async function dbSave(tableName, obj){
  if (obj.id == Number){
    dbUpdate(tableName, obj);
  } else {
    dbInsert(tableName, obj);
  }
}

module.exports = dbSave;