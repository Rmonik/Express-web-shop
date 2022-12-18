class CartController {

    static async addProductToCart(req, res, next) {
        throw new Error("Not yet supported");
    }

    static getCart(req, res, next) {
        throw new Error("Not yet supported");
        res.send("oops");
    }

    static async removeProductFromCart(req, res, next) {
        throw new Error("Not yet supported");
    }
}

module.exports = CartController;