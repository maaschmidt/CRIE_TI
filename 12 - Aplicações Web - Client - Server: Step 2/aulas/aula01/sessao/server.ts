import express, {Express, Request, Response} from 'express';
import session from 'express-session';
import path from 'path';
import { Usuario } from './model/usuario';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(express.static(path.join(__dirname, 'static')));
app.use(session({
  name: "mynodelogin",
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

app.get('/', function(req: Request, res: Response){
  res.sendFile(path.join(__dirname + '/login.html'));
});

app.post('/auth', async function(req: Request, res: Response){
  console.log("/auth")
  let username = req.body.username;
  let password = req.body.password;

  console.log(username);
  console.log(password);

  if(username && password){
    let logado = await Usuario.localizaUsuario(username, password);
    console.log(logado?.toJSON());

    res.end();
  } else {
    res.send("Por favor, usuário e senha!")
    res.end();
  }
})

app.listen(3000, function(){
  console.log("Server okay!")
})