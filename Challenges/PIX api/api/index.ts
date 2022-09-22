import express from 'express';
import axios from 'axios';
import * as Transaction from './controllers/TransactionController'

let server: express.Application = express();

server.use(express.json());

server.get("/users", async function (req, res) {
  const url: string = 'users';
  res.json(await consultaAPI(url));
});

server.get("/pix", async function (req, res) {
  const url: string = 'pix';
  res.json(await consultaAPI(url));
});

server.get("/user/:UserId/:type", async function (req, res) {
  const url: string = `pix/${req.params.UserId}/${req.params.type}`;
  res.json(await consultaAPI(url));
});

server.post("/pix", async function (req, res) {
  res.json(await Transaction.create(req.body));
});

server.listen(3000, function () {
});

const consultaAPI = async (url: string) => {
  try {
    const response = await axios('http://177.44.248.30/v1/' + url);
    return response.data;
  } catch (error) {
    return axios.isAxiosError;
  }
}