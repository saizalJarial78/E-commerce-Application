// backend/controllers/productController.js

const Product = require('../models/Product');

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getProductById = async (req, res) => {
  const productId = req.params.id;

  try {
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ msg: 'Product not found' });
    }

    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.addProduct = async (req, res) => {
  const { name, description, price } = req.body;

  try {
    const newProduct = new Product({
      name,
      description,
      price,
    });

    await newProduct.save();

    res.json(newProduct);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.updateProduct = async (req, res) => {
  const productId = req.params.id;
  const { name, description, price } = req.body;

  try {
    let product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ msg: 'Product not found' });
    }

    product.name = name;
    product.description = description;
    product.price = price;

    await product.save();

    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.deleteProduct = async (req, res) => {
  const productId = req.params.id;

  try {
    let product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ msg: 'Product not found' });
    }

    await product.remove();

    res.json({ msg: 'Product removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
