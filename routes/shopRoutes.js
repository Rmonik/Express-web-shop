const express = require('express');
const ProductController = require('../controllers/ProductController');
const CartController = require('../controllers/CartController');

const Router = express.Router();

Router.get('/', ProductController.getProducts);
Router.post('/addtocart', CartController.addProductToCart);
Router.post('/deleteproduct', ProductController.deleteProduct);


module.exports = Router;