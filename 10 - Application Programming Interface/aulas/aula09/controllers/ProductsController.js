const { Op } = require('sequelize');
const Product = require('../models/Product')

class ProductsController {
  
  index = async (req, res, next) => {
    const params = req.query;
    const limit = params.limit || 10;
    const page = params.page || 1;
    const offset = (page - 1) * limit;
    const sort = params.sort || 'id';
    const order = params.order || 'ASC';
    const where = {};

    if (params.name) {
      where.name = {
        [Op.iLike]: `%${params.name}`
      }
    }

    if(params.brand){
      where.brand = {
        [Op.iLike]: `%${params.brand}%`
      }
    }

    if(params.min_price){
      where.price = {
        [Op.gte]: params.min_price
      }
    }

    if(params.max_price){
      if(! where.price){
        where.price = {}
      }
      where.price[Op.lte] = params.max_price;
    }

    const product = await Product.findAll({
      where: where,
      limit: limit,
      offset: offset,
      order: [ [sort, order] ]
    });
    
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
    const product = await Product.findByPk(req.params.productId);
    res.json(product);
  }

  update = async (req, res, next) => {
    try {
      const id = req.params.productId;
      const data = await this._validateData(req.body, id);
      await Product.update(data, {
        where: {
          id: id
        }
      });
      res.json(await Product.findByPk(id));
    } catch (error) {
      res.status(400).json({error: error.message});
    }
  }

  delete = async (req, res, next) => {
    await Product.destroy({
      where: {
        id: req.params.productId
      }
    });
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
    const where = {
      name: name
    };

    if (id) {
      where.id = { [Op.ne]: id }; //WHERE id != id
    };

    const count = await Product.count({ 
      where: where
    });
    
    return count > 0;
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