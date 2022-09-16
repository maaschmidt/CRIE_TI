import * as express from "express";
import * as path from 'path';

let server: express.Application = express();
server.use(express.json());

server.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

server.listen(3000, function() {
    console.log("Servidor bombando!");
});