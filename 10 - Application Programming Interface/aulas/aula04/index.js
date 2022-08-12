new Promise((resolve, reject) => {});
const https = require('https');

const httpsGet = () => {
  return new Promise((resolve, reject) => {
    https.get('https://brasilapi.com.br/api/feriados/v1/2022', function(response) {
      let dados = '';
      response.on('data', function (buffer) {
        dados += buffer;
      });
      response.on('end', function () {
        resolve(JSON.parse(dados));
      })
    }).on('error', (error) => {
      reject(error);
    });
  });
}

httpsGet().then((dados) => {
  console.log(dados);
})
.catch((error) => {
  console.log(error);
});