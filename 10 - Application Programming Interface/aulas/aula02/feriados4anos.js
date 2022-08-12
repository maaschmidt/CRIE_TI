var https = require('https');

var feriadoAno = function(ano){
    var feriadosJuntos = '';
    https.get("https://brasilapi.com.br/api/feriados/v1/"+ano, function(response){
    var data = '';

    response.on('data', function(buffer){
        data += buffer;
    });

    response.on('end', function(){
        var feriado = JSON.parse(data);
        console.log(feriado)// + " - "+  feriado.date.split('-').reverse().join('/'));
        // feriadosJuntos = feriado.map(function(feriado){
        //     return feriado.name + " - "+  feriado.date.split('-').reverse().join('/');
        // });
        // feriados = feriados.concat(feriadosJuntos);
        // console.log(feriadosJuntos)
        })
    });
    // return feriadosJuntos;
}

var feriados = [];
var ano = 2022;
for (let i = 0; i < 4; i++) {
    feriados[i] = feriadoAno(ano);
    ano++;
}
// console.log(feriados);