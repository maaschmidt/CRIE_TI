// function soma(num1, num2){
//     return num1+num2;
// }
// console.log(soma(10, 20), soma(40, 50))

var https = require('https');

https.get('https://parallelum.com.br/fipe/api/v2/cars/brands', function(response){
    var data = '';

    response.on('data', function(buffer){
        data += buffer
    });
    response.on('end', function(){
        var marcas = JSON.parse(data);
        var marcasJuntas = marcas.map(function(marca){
            return marca.name;
        }).join(', ');
        console.log(marcasJuntas);
    })
});