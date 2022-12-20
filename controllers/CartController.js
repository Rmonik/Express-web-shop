class CartController {

    static addProductToCart(req, res, next) {
        console.log(req.body.product);
        res.redirect("/shop");
    }

    static getCart(req, res, next) {
        throw new Error("Not yet supported");
    }

    static async removeProductFromCart(req, res, next) {
        throw new Error("Not yet supported");
    }
}

module.exports = CartController;