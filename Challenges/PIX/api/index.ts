import express from 'express';
import axios from 'axios';
import cors from 'cors';
import * as Transaction from './controllers/TransactionController'

let app: express.Application = express();

app.use(cors());
app.use(express.json());

app.get("/users", async function (req, res) {
  const url: string = 'users';
  res.json(await consultaAPI(url));
});

app.get("/pix", async function (req, res) {
  const url: string = 'pix';
  res.json(await consultaAPI(url));
});

app.get("/pix/:UserId/:type", async function (req, res) {
  const url: string = `pix/${req.params.UserId}/${req.params.type}`;
  res.json(await consultaAPI(url));
});

app.post("/pix", async function (req, res) {
  const pix = await Transaction.create(req.body);
  res.json(pix);
});

app.listen(3000, function () {
});

const consultaAPI = async (url: string) => {
  try {
    const response = await axios('http://177.44.248.30/v1/' + url);
    return response.data;
  } catch (error) {
    return axios.isAxiosError;
  }
}