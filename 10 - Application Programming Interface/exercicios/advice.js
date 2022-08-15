new Promise((resolve, reject) => {});
var https = require('https');

urlAdvice = "https://api.adviceslip.com/advice";

const advice = (url) => {
  return new Promise((resolve, reject) => {
    https.get(urlAdvice, function(response) {
      let dados = ''
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

advice().then((dica) => {
  console.log(dica.slip.advice);
});