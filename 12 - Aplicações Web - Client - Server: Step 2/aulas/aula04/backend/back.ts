import express, { Express, Request, Response } from 'express';
import Usuario from '../backend/model/Usuario';
import cors from 'cors';
const app : Express = express();
app.use(cors());

const authentication = async (req : Request ) => {
  let authorization = req.headers.authorization+''
  authorization = authorization.replace("Basic ", '');
  let ascii = Buffer.from(authorization, 'base64').toString('ascii');
  let dados = ascii.split(':');
  
  let username = dados[0];
  let password = dados[1];
  let logado = await Usuario.localizaUsuario(username, password);
  return logado;
}

app.get('/auth', async function(req, res){
  res.json(await authentication(req));
});

app.get('/verify', async function(req, res){
  res.json(await authentication(req));
});

app.listen(3000, function(){
    console.log("Back online!");
});