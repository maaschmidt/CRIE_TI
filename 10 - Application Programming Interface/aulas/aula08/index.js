const express = require('express');
const router = require('./routes')

const PORT = 3000;

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log('[' + (new Date()) + '] ' + req.method + ' ' + req.url);
  next();
});

app.use(router);

app.use((req, res, next) => {
  res.status(404).json({error: 'Not Found'});
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}/`);
});