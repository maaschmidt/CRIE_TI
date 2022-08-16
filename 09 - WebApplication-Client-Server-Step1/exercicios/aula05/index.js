const dbInsert = require("./dbinsert.js");

let table = "teste"
let dados = [{
  nome: "Marcel",
  sobrenome: "Schmidt"
},{
  nome: "Ariele",
  sobrenome: "Marques"
},{
  nome: "Juca",
  sobrenome: "Bala"
}]

dbInsert(tableName, dados);