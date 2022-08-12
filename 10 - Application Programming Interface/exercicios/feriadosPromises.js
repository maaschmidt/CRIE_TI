new Promise((resolve, reject) => {});
const https = require('https');
const url = 'https://brasilapi.com.br/api/feriados/v1/'//+ano

const anos = [2022, 2023, 2024, 2025];
let todosFeriados = [];
let requestsTerminados = 0;

const obterFeriados = (url, ano) => {
  return new Promise((resolve, reject) => {
    https.get(url+ano, function(response) {
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

const ordenarFeriados = (feriados) => {
  return new Promise((resolve, reject) => {
    todosFeriados.sort(function (a, b) {
      if (new Date(a.date) < new Date(b.date)) {
        return -1;
      }
      if (new Date(a.date) > new Date(b.date)) {
        return 1;
      }
      return 0;
    });
    resolve(todosFeriados);
  })
}

const formatarFeriados = (todosFeriados) => {
  return new Promise((resolve, reject) => {
    let feriadosFormatados = [];
    todosFeriados = todosFeriados.map(function (item) {
      feriadosFormatados = feriadosFormatados.concat ({
        nome: item.name,
        data: item.date.split('-').reverse().join('/')
      });
    });
    resolve(feriadosFormatados);
  });
}

const imprimirFeriados = (todosFeriados) => {
  console.log(todosFeriados);
}

//fazer outra função para o for com o if, que devolve um array com todos os feriados,
// após isso ordenar e formatar
//Ex:
//obterFeriados()
//  .then(ordenarFeriados)
//  .then(formatarFeriados)
//  .then(imprimirFeriados)
anos.forEach(function (ano) {
  obterFeriados(url, ano)
  .then((feriados) => {
    todosFeriados = todosFeriados.concat(feriados);
    requestsTerminados++;
    if (requestsTerminados === anos.length) {
      ordenarFeriados(todosFeriados)
      .then((todosFeriados) => {
        formatarFeriados(todosFeriados)
        .then((todosFeriados) => {
          imprimirFeriados(todosFeriados);
        });
      });
    }
  }).catch((error) => {
    console.log("Erro: "+ error)
  });
});