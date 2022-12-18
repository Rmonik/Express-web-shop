const express = require('express');
const ProductController = require('../controllers/ProductController');
const CartController = require('../controllers/CartController');

const Router = express.Router();

// /shop/ +
Router.get('/', ProductController.getShop);
Router.post('/addtocart', CartController.addProductToCart);
Router.post('/deleteproduct', ProductController.deleteProduct);


module.exports = Router;