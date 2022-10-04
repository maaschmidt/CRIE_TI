import express, { Express, Request, Response } from 'express';
import * as path from 'path';
import Usuario from '../backend/model/Usuario';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

app.get('/auth', async function(req: Request, res: Response){
  let username = req.headers.username+'';
  let password = req.headers.password+'';
  let logado = await Usuario.localizaUsuario(username, password);
  res.json(logado);
});

app.get('/verify', async function(req: Request, res: Response){
  let username = req.headers.username+'';
  let password = req.headers.password+'';
  let logado = await Usuario.localizaUsuario(username, password);
  res.json(logado);
});

app.listen(3000, function(){
    console.log("Back online!");
});