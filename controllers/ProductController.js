let Product = require('../models/modeldefinitions/Product');
let ProductRepository = require('../models/repositories/ProductRepository');

class ProductController {

    static async addProduct(req, res, next) {
        let prod = new Product(null, req.body.title, req.body.description, req.body.price);
        ProductRepository.createProduct(prod)
            .then(() => {
                res.redirect('/');
            }).catch(err => {
                console.log("Something rrrrrrong");
                res.setHeader('content-type', 'application/json');
                res.status(400).json(err);
            });
    }

    static async getShop(req, res, next) {
        let arr = await ProductRepository.getProducts();
        res.render('shop/shop.ejs', {
            pageTitle: "Shop",
            products: arr,
            loggedIn: !!req.userId,
            flashmessage: req.flashMessage,
        });
    }

}

module.exports = ProductController;