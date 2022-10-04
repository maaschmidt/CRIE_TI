import express, { Express } from 'express';
import * as path from 'path';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

app.listen(8080, function(){
    console.log("Front online!");
});
