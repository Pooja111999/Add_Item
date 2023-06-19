const Product = require("../model/Product");
const jwt = require('jsonwebtoken');

// Get All item
const product_all = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
      } catch (error) {
        res.json({ message: error });
      }
};

// Single item
const product_details = async (req, res) => {
    try {
        const product = await Product.findById(req.params.productId);
        res.json(product);
      } catch (error) {
        res.json({ message: error });
      }
};

// Add New item
const product_create = async (req, res) => {
 // console.log(req.body)
    const product = new Product({
        title: req.body.title,
        price: req.body.price,
        details: req.body.details
      });

    console.log(product);
      try {
        const savedProduct = await product.save();
        res.send(savedProduct);
      } catch (error) {
        res.status(400).send(error);
      }
};

// Update item
const product_update = async (req, res) => {
    try {
        const product = {
          title: req.body.title,
          price: req.body.price,
          details: req.body.details
        };
    
        const updatedProduct = await Product.findByIdAndUpdate(
          { _id: req.params.productId },
          product
        );
        res.json(updatedProduct);
      } catch (error) {
        res.json({ message: error });
      }
};

// Delete item
const product_delete = async (req, res) => {
    try {
        const removeProduct = await Product.findByIdAndDelete(req.params.productId);
        res.json(removeProduct);
      } catch (error) {
        res.json({ message: error });
      }
};

module.exports = {
    product_all, 
    product_details, 
    product_create, 
    product_update, 
    product_delete
  }