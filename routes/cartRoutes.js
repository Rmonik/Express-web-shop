const express = require("express");

const CartController = require('../controllers/CartController');
const OrderController = require("../controllers/OrderController");

const Router = express.Router();


// /cart/ +
Router.get('/', CartController.getCart);
Router.post('/removeitem', CartController.removeProductFromCart);
Router.post('/order', OrderController.createOrder);


module.exports = Router;