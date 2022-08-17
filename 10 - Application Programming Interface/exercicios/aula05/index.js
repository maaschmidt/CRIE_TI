const http = require('http');
const PORT = 3000;
const fs = require("fs");

obterDados = () => {
  return new Promise((resolve, reject) => {
    fs.readFile("users.json", "utf-8", function(err, data){
      if(err){
        reject(err);
      }
      resolve(data);
      })
  })
}

mostrarDados = (data) => {
  http.createServer((request, response) => {

    const url = request.url;
    // const segments = url.split('/').filter((segment) => Boolean(segment));
    let status = 200;

    if (url === '/'){
      data = { message: 'Olá Mundo!' };
    } else if (url === '/users') {
      data = data;
    } else if (segments[0] === 'users' && segments.length === 2) {
      const id =+ segments[1];
      if (isNaN(id) || id < 1 || id > 100){
        status = 404;
        data = { error: 'Recurso não encontrado!'}
      } else {
        data = { id: +segments[1] };
      }
    } else {
      data = { error: 'Página não encontrada' };
      status = 404
    }
    
    console.log(url);
    
    response.writeHead(status, {'Content-type': 'application/json; charset=utf8'});
    response.write(JSON.stringify(data));
    
    response.end();
  }).listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
  });
}

const main = () => {
  
  obterDados()
    .then(mostrarDados);
}
main();