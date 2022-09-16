import * as express from "express";
import * as path from 'path';
import * as md5 from 'md5';

let server: express.Application = express();
server.use(express.json());

server.get("/calculator", function (req, res) {
    console.log(req.query);
    


    console.log(md5(req.url));



    // res.sendFile(path.join(__dirname, '/index.html'));
});

server.listen(process.env.PORT, function() {
    console.log("Servidor bombando!");
});