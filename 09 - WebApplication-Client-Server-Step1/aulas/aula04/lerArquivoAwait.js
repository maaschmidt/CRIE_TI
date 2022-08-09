const fs = require("fs");

async function main(){
    console.log("antes")
    
    let content = await fs.promises.readFile("conteudo.json", "utf-8")//le o arquivo esperando retorno
    console.log(content);

    let produtos = JSON.parse(content);//converte o JSON em um vetor
    
    console.log(produtos);//imprime o vetor completo
    console.log(produtos[1].nome);//imprime o nome do produto que esta na posição 1 do vetor
    
    console.log("depois");
}

main();