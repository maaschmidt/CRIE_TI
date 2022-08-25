const Product = require('../models/Product')

class ProductsController {
  
  index = async (req, res, next) => {
    const product = await Product.all();
    res.json(product);
  }
  create = async (req, res, next) => {
    try {
      const data = await this._validateData(req.body);
      const product = await Product.create(data);
      res.json(product);
    } catch (error) {
      res.status(400).json({error: error.message});
    }
  }

  show = async (req, res, next) => {
    const product = await Product.find(req.params.productId);
    res.json(product);
  }

  update = async (req, res, next) => {
    try {
      const id = req.params.productId;
      const data = await this._validateData(req.body, id);
      const product = await Product.update(data, id);
      res.json(product);
    } catch (error) {
      res.status(400).json({error: error.message});
    }
  }

  delete = async (req, res, next) => {
    await Product.delete(req.params.productId);
    res.json({});
  }
  
  _validateData = async (data, id) => {
    const attributes = ['name', 'brand', 'price'];
    let product = {};
    for (const attribute of attributes) {
      if(! data[attribute]){
        throw new Error(`The attribute ${attribute} is required.`);
      }
      product[attribute] = data[attribute];
    };
    if (await this._checkIfNameExists(product.name, id)){
      throw new Error(`The product ${product.name} already exists.`);
    }
    return product;
  };
  
  _checkIfNameExists = async (name, id) => {
    const products = await Product.all();
    const product = products.find((product) => product.name === name && product.id !== Number(id));
  
    return Boolean(product);
  }
  
  _validateProductId = async (req, res, next) => {
    const product = await Product.find(req.params.productId);
    if (! product){
      return res.status(404).json({error: 'Product not found'})
    }
    next();
  }
}

module.exports = new ProductsController();