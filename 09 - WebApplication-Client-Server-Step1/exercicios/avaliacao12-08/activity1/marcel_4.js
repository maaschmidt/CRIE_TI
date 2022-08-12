const fs = require("fs");

async function main(){
    let dados = JSON.parse(await fs.promises.readFile("marcel_3.json", "utf-8"));
    
    dados[0].nome = "Marcel";
    dados[0].codigo = "CRIE_TI";

    let gravar = JSON.stringify(dados);
    fs.writeFile("marcel_4.json", gravar, (err) =>{
    });
}

main();