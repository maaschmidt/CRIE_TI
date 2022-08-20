const http = require('http');
const PORT = 3000;
const fs = require("fs");
let dataTemp={};

getData = () => {
  return new Promise((resolve, reject) => {
    fs.readFile("users.json", "utf-8", function(err, data){
      if(err){
        reject(err);
      }
      resolve(data);
      })
  })
}

showData = (data) => {
  dataTemp = data;
  http.createServer((request, response) => {

    let payload = '';
    request.on('data', (buffer) => {
      payload += buffer;
    });
    request.on('end', () => {    
      data = JSON.parse(dataTemp);
      const url = request.url;
      method = request.method;
      const segments = url.split('/').filter((segment) => Boolean(segment));
      let status = 200;

      console.log(method);

      if (method === 'GET' && url === '/users'){
        data = { message: 'Olá Mundo!' };
      } else if (method === 'POST' && url === '/users'){
        //Código para salvar novo usuário

        data = { message: 'Usuário salvo com sucesso' }
      } else if (method === 'GET' && segments[0] === 'users' && segments.length === 2) {
        const id = +segments[1];
        if (isNaN(id) || id < 1 || id > 7){
          status = 404;
          data = { error: 'Recurso não encontrado!'}
        } else {
          data = data[id-1];
        }
      } else {
        data = { error: 'Página não encontrada' };
        status = 404
      }

      response.writeHead(status, {'Content-type': 'application/json; charset=utf8'});
      response.write(JSON.stringify(data));

      response.end();
    });
  }).listen(PORT, () => { });
}

const main = () => {
  getData()
    .then(showData);
}
main();