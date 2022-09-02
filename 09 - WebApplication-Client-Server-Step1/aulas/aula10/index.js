const Form = require("./Model/form.js");
const fs = require("fs");
const express = require("express");
const bp = require("body-parser");
const path = require("path");
const app = express();
const port = 3000;
app.use(bp.urlencoded ({ extended: true }));
app.use("/static", express.static(__dirname+"/static/"));
// app.render("view engine", "ejs");

app.get("/" , function(req, res){
  res.sendFile(path.join(__dirname, '/form.html'));
});

app.use("/form", async function(req, res){
  let content = await fs.promises.readFile(__dirname+"/mensagens.json", "utf-8")//le o arquivo esperando retorno
  content = JSON.parse(content);

  let nome = req.query.nome;
  let email = req.query.email;
  let msg = req.query.msg;
  let conteudo = {"nome": nome,
  "email": email, 
  "mensagem": msg};
  
  content.push(conteudo);
  
  fs.writeFile(__dirname+"/mensagens.json", JSON.stringify(content), function(data){
    console.log("Arquivo salvo");
  });

  Form.create({"nome": nome,
  "email": email, 
  "mensagem": msg});
  

  res.send(`<h1>Olá ${conteudo.nome}.</h1></br><h4>Aguarde retorno da empresa</h4>`)
  // res.render("result", content)
});

app.listen(port, () => {
  console.log("Rodando http://localhost:"+port);
});