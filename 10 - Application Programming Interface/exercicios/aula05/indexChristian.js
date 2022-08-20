const http = require('http');
const PORT = 3000;
const fs = require("fs");
const { resolve } = require('path');
const { rejects } = require('assert');
const fileName = './users.json'

getData = () => {
    return new Promise((resolve, reject) => {
        const data = await fs.promises.readFile(fileName, 'utf-8');
        resolve(JSON.parse(data));
    })
}

showData = (data) => {
//   dataTemp = data;
  http.createServer((request, response) => {
    data = JSON.parse(dataTemp);
    const url = request.url;
    const segments = url.split('/').filter((segment) => Boolean(segment));
    let status = 200;

    if (segments[0] === 'users' && segments.length === 2) {
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
    
    // console.log(url);
    
    response.writeHead(status, {'Content-type': 'application/json; charset=utf8'});
    response.write(JSON.stringify(data));
    
    response.end();
  }).listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
  });
}

const main = () => {
  getData(data)
    .then(showData);
}
main();