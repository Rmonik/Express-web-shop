const express = require('express');
const ProductController = require('../controllers/ProductController');
const CartController = require('../controllers/CartController');
const AuthController = require("../controllers/AuthController");

const Router = express.Router();

// /shop/ +
Router.get('/', ProductController.getShop);
Router.post('/addtocart', AuthController.protectRouteAuth, CartController.addProductToCart);


module.exports = Router;