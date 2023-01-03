const CartRepository = require('../models/repositories/CartRepository');

class CartController {

    static addProductToCart(req, res, next) {
        let productId = req.body.product;
        CartRepository.addToCart(productId, req.userId)
            .then(data => {
                res.flash("Succesfully added item to cart");
                return res.redirect("/shop");
            }).catch(err => {
                console.log("Unable to add product to cart: ", err);
                return res.redirect("/shop");
            })

    }

    static getCart(req, res, next) {
        CartRepository.getCartItems(req.userId)
            .then(data => {
                let totalPrice = data.map(el => parseFloat(el.price)).reduce((acc, curr) => acc + curr, 0).toFixed(2);
                res.render('cart/cart.ejs', {
                    pageTitle: "Cart",
                    cartItems: data,
                    totalPrice: totalPrice,
                    loggedIn: !!req.userId,
                    flashmessage: req.flashMessage,
                });
            }).catch(err => {
                console.log("Could not get cart: ", err);
            })

    }

    static async removeProductFromCart(req, res, next) {
        throw new Error("Not yet supported");
    }
}

module.exports = CartController;