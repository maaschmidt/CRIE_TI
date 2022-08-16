new Promise((resolve, reject) => {});
const https = require('https');

const httpsGet = () => {
  return new Promise((resolve, reject) => {
    https.get("https://parallelum.com.br/fipe/api/v1/carros/marcas", function(response) {
      let dados = "";

      response.on('data', function (buffer) {
        dados += buffer;
      });
      response.on('end', function(){
        resolve(JSON.parse(dados));
      })
    }).on('error', (err) => {
      reject(err);
    });  
  });
}

httpsGet().then((dados) => {
  console.log(dados);
}).catch((err) => {
  console.log(err);
})