const https = require('https');

https.get("https://brasilapi.com.br/api/feriados/v1/2022", function(response){
    let dados = '';
    response.on('data', function(buffer){
        dados += buffer;
    });
    response.on('end', function(){
        dados = JSON.parse(dados);
        
        const feriados = [];
        dados.forEach(element => {
            feriados.push({
                name: element.name,
                date: element.date
            })
        });
        console.log(feriados);
    })
})