const fs = require("fs");

async function main(){
    let content = await fs.promises.readFile("conteudo.json", "utf-8")//le o arquivo esperando retorno
    console.log(content);

    let produtos = JSON.parse(content);//converte o JSON em um vetor
    
    console.log(produtos);//imprime o vetor completo
    console.log(produtos[1].nome);//imprime o nome do produto que esta na posição 1 do vetor
    
    var produto3= {
        nome : "Bola Triangular",
        valor : 49.90
    }
    produtos.push(produto3);

    let gravar = JSON.stringify(produtos);
    fs.writeFile("conteudo.json", gravar, (err) =>{
    });

    console.log(gravar);
    console.log(produtos);
}

main();