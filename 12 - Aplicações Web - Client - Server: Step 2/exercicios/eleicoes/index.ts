require("dotenv").config();
import express, { Express, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import * as Voto from './controllers/VoteController'
import { Vote } from './models/Vote';

let app: express.Application = express();

app.use(cors());
app.use(express.json());

app.get("/votes", async function (req, res) {
  const response = await Vote.findAll()
  res.json(response);
});

app.post("/vote", async function (req, res) {
  const vote = await Voto.create(req.body);
  res.json(vote);
});

app.listen(process.env.PORT, function () {
});

const consultaAPI = async () => {
  try {
    

  } catch (error) {
    return error;
  }
}