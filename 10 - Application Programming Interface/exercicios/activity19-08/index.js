const http = require('http');
const xml2js = require('xml2js');
const PORT = 3000;
const fs = require("fs");
const dbQuery = require("./dbQuery.js");

getMusic = async ()  => {
  return new Promise(async(resolve, reject) => {
    let sql = (`SELECT musicas.id,
                       musicas.nome,
                       musicas.artista,
                       musicas.album,
                       generos.descricao
                  FROM musicas
            INNER JOIN generos ON (generos.id = musicas.generos_id)`);
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
      let data = await getMusic();

      if(url != '/musicas' && url != '/musicasxml'){
        data = [{"error": 'URL inválida, por favor digite uma URL válida!'},
      {"URL Válidas": "/musicas ou /musicasxml"}];
        response.writeHead(status, {'Content-type': 'application/json; charset=utf8'});
        response.write(JSON.stringify(data));
      }else if (method === 'GET' && url === '/musicas'){
        response.writeHead(status, {'Content-type': 'application/json; charset=utf8'});
        response.write(JSON.stringify(data));
      }else if (method === 'GET' && url === '/musicasxml'){
        let dataXML ="";
        for (const musica of data) {
        dataXML += `<musica id="${musica.id}">
            <nome>${musica.nome}</nome>
            <artista>${musica.artista}</artista>
            <album>${musica.album}</album>
            <genero>${musica.descricao.charAt(0).toUpperCase() + musica.descricao.slice(1)}</genero>
        </musica>`
        }
        let xml =`<?xml version="1.0" ?>
        <musicas>${dataXML}</musicas>`
        response.writeHead(status, {'Content-type': 'application/xml; charset=utf8'});
        response.write(xml);
      }
      
      response.end();
    });
  }).listen(PORT, () => { });
}

createServer();