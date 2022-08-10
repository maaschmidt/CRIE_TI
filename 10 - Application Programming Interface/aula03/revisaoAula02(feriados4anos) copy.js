// const https = require('https');
// anos = [2022, 2023, 2024, 2025];
// var todosFeriados = [];
// let requestTerminados = 0;

// anos.forEach(function(ano, i){
//     buscarDados(ano);
//     callBack();
//     ordenar();        
//     imprime(); 
// });

// function buscarDados(ano){
//     //entra em contato com a API
//     fazerRequest(("https://brasilapi.com.br/api/feriados/v1/"+ano, function(response))
    
//     let dados = '';
//     //recebe os dados de forma binária
//     response.on('data', function(buffer){
//         dados += buffer;
//     });
//     });
// }

// function fazerRequest(url, callback){
//     https.get(url, function(re))
// }

// function callBack(){
//     //callback
//     response.on('end', function(){
//         //transforma os dados em JSNON
//         todosFeriados = todosFeriados.concat(JSON.parse(dados));
//     });
//     requestTerminados++;
// }

// function ordenar(){
//     if(requestTerminados === anos.length){
//         todosFeriados.sort(function(a, b){
//             if(new Date(a.date) < new Date(b.date)){
//                 return -1;
//             }
//             if(new Date(a.date) > new Date(b.date)){
//                 return 1;
//             }
//             return 0;
//         });
//     }
// }

// function imprime(){
//     const feriados = [];
//         todosFeriados.forEach(element => {
//             feriados.push({
//                 name: element.name,
//                 date: element.date.split('-').reverse().join('/'),
//             })
//         });
//         console.log(feriados);
// }