var https = require('https');

https.get('https://brasilapi.com.br/api/feriados/v1/2022', function(response){
    var data = '';

    response.on('data', function(buffer){
        data += buffer;
    });
    response.on('end', function(){
        var feriado = JSON.parse(data);
        var feriadosJuntos = feriado.map(function(feriado){
            return feriado.name + " - "+  feriado.date.split('-').reverse().join('/');
        }).join('\n========================================\n');
        console.log(feriadosJuntos);
    })
});