const OrderRepository = require("../models/repositories/OrderRepository");
const CartRepository = require('../models/repositories/CartRepository');


class OrderController {

    static getOrders(req, res, next) {
        
    }

    static createOrder(req, res, next) {
        const userId = req.userId;
        // get Cart
        CartRepository.getCartItems(userId)
            .then((cart) => {
                console.log(cart.length);
                if(!cart.length) {
                    console.log("wtffff");
                    res.flash("Nothing to order now!");
                    return res.redirect("/shop");
                }
        // calculate total price
                const totalPrice = cart.map((item) => parseFloat(item.price)).reduce((sum, curr) => sum + curr);
        // create order from cart items
                return OrderRepository.createOrder(userId, totalPrice, cart.map((item) => item.id));
            }).then((data) => {
        // empty cart
                CartRepository.emptyCart(userId);
            }).then((data) => {
                res.flash("Order succesfully created");
                return res.redirect("/shop");
            })
            
            .catch((err) => {
                console.log("Could not create orders: ", err);
            });

    }

    

}

module.exports = OrderController;