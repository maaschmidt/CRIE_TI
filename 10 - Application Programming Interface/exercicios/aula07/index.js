const express = require('express');
const fs = require('fs');
const fsPromises = fs.promises;

const products_FILENAME = './products.json';
const PORT = 3000;

const getProducts = () => {
  return new Promise(async (resolve, reject) => {
    const dados = await fsPromises.readFile(products_FILENAME, 'utf-8');
    resolve(JSON.parse(dados));
  });
}

const findProduct = (id) => {
  return new Promise(async (resolve, reject) => {
    const products = await getProducts();
    const product = products.find((user) => user.id === id);
    resolve(product);
  });
}

const createProduct = (data) => {
  return new Promise(async (resolve, reject) => {
    const products = await getProducts();
    if(products.length === 0){
      data.id = 1;
    } else {
      const id = products[products.length - 1].id + 1;
      data.id = id;
    }
    products.push(data);
    await fsPromises.writeFile(products_FILENAME, JSON.stringify(products));
    resolve(data);
  });
}

const updateProduct = (data, id) => {
  return new Promise(async (resolve, reject) => {
    const products = await getProducts();
    const index = products.findIndex((product) => product.id === id);
    console.log(products, index);
    data.id = id;
    products[index] = data;
    await fsPromises.writeFile(products_FILENAME, JSON.stringify(products));
    resolve(data);
  });
}

const deleteProduct = (id) => {
  return new Promise(async (resolve, reject) => {
    const products = await getProducts();
    const index = products.findIndex((product) => product.id === id);
    products.splice(index, 1);
    await fsPromises.writeFile(products_FILENAME, JSON.stringify(products));
    resolve();
  });
}

const validation = async (data) => {
  const products = await getProducts();
  let productExist = false;
  products.forEach(product => {
    if(data.nome == product.nome){
      productExist = true;
    }
  });
  if (!productExist){
    return new Promise(async (resolve, reject) => {
      if (typeof(data.nome) === "string" && typeof(data.marca) === "string" && typeof(data.preco) === "number"){
        resolve(true);
      } else {
        resolve(false);
      }
    });
  } else {
    return ("Product already exist");
  }
}

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log('[' + (new Date()) + '] ' + req.method + ' ' + req.url);
  next();
});

app.get('/', (req, res, next) => {
  res.json({ content: 'Hello World' });
});

app.get('/products', async (req, res, next) => {
  const products = await getProducts();
  res.json(products);
});

app.post('/products', async (req, res, next) => {
  const valid = await validation(req.body);
  console.log(valid);
  if(valid && typeof(valid) != 'string'){
    const product = await createProduct(req.body);
    res.json(product);
  } else if (!valid) {
    res.status(406).json({ error: 'Invalid Content' });
  } else if (typeof(valid) === 'string'){
    res.status(404).json({ error: valid });
  }
});

app.get('/products/:productId', async (req, res, next) => {
  const product = await findProduct(Number(req.params.productId));
  if (product) {
    res.json(product);
  } else {
    const products = await getProducts();
    res.status(404).json({ error: `Are products id 1 until ${products.length} registred` });
  }
});

app.put('/products/:productId', async (req, res, next) => {
  const product = await updateProduct(req.body, Number(req.params.productId));
  res.json(product);
});

app.delete('/products/:productId', async (req, res, next) => {
  await deleteProduct(Number(req.params.productId));
  res.json({});
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}/`);
});