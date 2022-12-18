const express = require("express");

const CartController = require('../controllers/CartController');

const Router = express.Router();


// /cart/ +
Router.get('/', CartController.getCart);
Router.post('/removeitem', CartController.removeProductFromCart);



module.exports = Router;