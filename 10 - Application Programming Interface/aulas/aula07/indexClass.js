const express = require('express')
const PORT = 3000
const app = express()
const content = [
  { id: 1, name: 'Juca Bala' },
  { id: 2, name: 'Mara Bala' },
]

app.use(express.json());

app.use((req, res, next) => {
  // console.log('[' + (new Date()) + '] ' + req.method + ' ' + req.url);
  console.log(`[ ${(new Date())} ] ${req.method} ${req.url}`);
  next();
})

app.get('/', (req, res, next) => {
  // Para texto
  // res.send("Olá Mundo!");
  // Para JSON
  res.json({ content: "Olá Mundo!" });
});

app.get("/users", (req, res, next) => {
  res.json(content);
});

app.post("/users", (req, res, next) => {
  // Tem corpo na rquisição
  console.log(req.body);
  // Salva o usuário no arquivo
  res.json({ name: "Juca Bala" });
});

app.get("/users/:userId", (req, res, next) => {
  // Apresenta os parametros enviados na requisição
  console.log(req.params);
  // Pega o usuário no arquivo
  res.json(content[req.params.userId-1]);
});

app.put("/users/:userId", (req, res, next) => {
  // Apresenta os parametros enviados na requisição
  console.log(req.params);
  // Tem corpo na rquisição
  console.log(req.body);
  // Atualiza o usuário no arquivo
  res.json({ name: "Juca Bala" });
});

app.delete("/users/:userId", (req, res, next) => {
  // Deleta o usuário no arquivo
  res.json({});
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
});