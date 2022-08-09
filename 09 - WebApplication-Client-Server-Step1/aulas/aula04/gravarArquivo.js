const fs = require("fs");

let produtos = [];
let produto1 = {
    nome : "Bola Quadrada",
    valor : 16.90
}
let produto2 = {
    nome : "Bola Redonda",
    valor : 29.90
}
produtos.push(produto1);
produtos.push(produto2);

let conteudo = JSON.stringify(produtos);

fs.writeFile("conteudo.json", conteudo, function(err){
    if (err){
        throw err;
    }
    console.log("Gravado com sucesso!")
});
console.log(conteudo);