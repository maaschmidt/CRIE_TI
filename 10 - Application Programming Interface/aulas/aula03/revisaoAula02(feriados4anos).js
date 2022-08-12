const https = require('https');
anos = [2022, 2023, 2024, 2025];
var todosFeriados = [];
let requestTerminados = 0;

anos.forEach(function(ano, i){
    //entra em contato com a API
    https.get("https://brasilapi.com.br/api/feriados/v1/"+ano, function(response){
        let dados = '';
        //recebe os dados de forma binária
        response.on('data', function(buffer){
            dados += buffer;
        });
        //callback
        response.on('end', function(){
            //transforma os dados em JSNON
            todosFeriados = todosFeriados.concat(JSON.parse(dados));
            
            requestTerminados++;

            if(requestTerminados === anos.length){
                todosFeriados.sort(function(a, b){
                    if(new Date(a.date) < new Date(b.date)){
                        return -1;
                    }
                    if(new Date(a.date) > new Date(b.date)){
                        return 1;
                    }
                    return 0
                })        
            
                const feriados = [];
                todosFeriados.forEach(element => {
                    feriados.push({
                        name: element.name,
                        date: element.date.split('-').reverse().join('/'),
                    })
                });
                console.log(feriados);
            }
        })
    })
})