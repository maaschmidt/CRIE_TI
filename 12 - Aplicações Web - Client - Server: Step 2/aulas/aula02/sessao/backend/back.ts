import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import Usuario from './model/Usuario';
import session from 'express-session';
import * as SessionData from './types/types';

const app = express();
app.use(cors({
    origin: 'http://localhost:8080',
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    name: 'aulasessao',
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
}));

app.get('/', function(req: Request, res: Response){
    res.json({ sucesso: true })
});

app.get('/auth', async function(req: Request, res: Response){
    let username = req.query.username+'';
    let password = req.query.password+'';
    let logado = await Usuario.localizaUsuario(username, password);

    if(logado && logado.id){
        req.session.loggedIn = true;
        req.session.userId = logado.id;
        req.session.username = logado.nome;
        req.session.email = logado.email;
        req.session.type = 'admin';
        res.json(true);
    } else {
        res.json(false);
    }
});

app.get('/verify', async function (req: Request, res: Response) {
    let result = {
        loggedIn : req.session.loggedIn+"",
        userId: req.session.userId+"",
        userName: req.session.username+"",
        type: req.session.type+""
    }
    res.json(result);
});

app.get('/out', function(req: Request, res: Response){
    req.session.destroy(function(){
        console.log("Sessão encerrada")
    })
})

app.listen(3000, function(){
    console.log("Back online!");
});