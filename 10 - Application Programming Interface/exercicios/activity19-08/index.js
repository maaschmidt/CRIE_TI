const http = require('http');
const PORT = 3000;
const fs = require("fs");
const dbQuery = require("./dbQuery.js");

getMusic = async ()  => {
  return new Promise(async(resolve, reject) => {
    let sql = (`SELECT * from musicas`);
    let data = await dbQuery(sql, 0);
    resolve(data);
  })
}
getGenra = async ()  => {
  return new Promise(async(resolve, reject) => {
    let sql = (`SELECT * from generos`);
    let data = await dbQuery(sql, 0);
    resolve(data);
  })
}


const createServer = () => {
  http.createServer((request, response) => {
    let payload = '';
    request.on('data', (buffer) => {
      payload += buffer;
    });
    request.on('end', async() => {    
      payload = payload ? JSON.parse(payload) : {};
      const url = request.url;
      method = request.method;
      const segments = url.split('/').filter((segment) => Boolean(segment));
      let status = 200;

      if(url === '/'){
        data = [{"error": 'URL inválida, por favor digite uma URL válida!'}];
      }else if (method === 'GET' && url === '/musicas'){
        let musicas = await getMusic();
        let generos = await getGenra();
        await musicas.forEach((musica) => {
          generos.forEach(genero => {
            if (musica.generos_id === genero.id){
              delete musica.generos_id;
              musica.genero = genero.descricao;
            }
          });
        });
        data = musicas;
      }
      
      response.writeHead(status, {'Content-type': 'application/json; charset=utf8'});
      response.write(JSON.stringify(data));
      response.end();
    });
  }).listen(PORT, () => { });
}

createServer();