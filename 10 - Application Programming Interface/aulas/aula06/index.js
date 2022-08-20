const http = require('http');
const PORT = 3000;
const fs = require("fs");
const { resolve } = require('path');
const fileName = './users.json'

getData = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, "utf-8", function(err, data){
      resolve(JSON.parse(data));
      })
  })
}

const createUser = (data) => {
  return new Promise(async (resolve, reject) => {
    const users = await getData();
    const id = users[users.length - 1].id + 1;
    data.email = id;
    users.push(data);
    await fs.promises.writeFile(fileName, JSON.stringify(users));
    resolve(data);
  })
}

const updateUser = (data, id) => {
  return new Promise(async (resolve, reject) => {
    const users = await getData();
    const index = users.findIndex(users => users.id === id);
    data.id = id;
    users[index] = data;
    await fs.promises.writeFile(fileName, JSON.stringify(users));
    resolve(data);
  })
}

const findUser = (id) => {
  return new Promise(async (resolve, reject) => {
    const users = await getData();
    const user = users.find((user) => user.id === id);
    resolve(user);
  });
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

      if (method === 'GET' && url === '/users'){
        data = await getData();
      } else if (method === 'POST' && url === '/users'){
        data = await createUser(payload);
      } else if (method === 'PUT' && segments[0] === 'users' && segments.length === 2) {
        data = await updateUser(payload, +segments[1]);
      } else if (method === 'GET' && segments[0] === 'users' && segments.length === 2) {
        const user = await findUser(+segments[1])
        if(user){
          data = user;
        }else{
          status = 404;
          data = { error: 'Recurso não encontrado!'}
        }
      }
      
      response.writeHead(status, {'Content-type': 'application/json; charset=utf8'});
      response.write(JSON.stringify(data));
      response.end();
    });
  }).listen(PORT, () => { });
}

createServer();