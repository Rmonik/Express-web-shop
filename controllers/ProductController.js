let Product = require('../models/modeldefinitions/Product');
let ProductRepository = require('../models/repositories/ProductRepository');
let FileController = require('./FileController');


class ProductController {

    static async addProduct(req, res, next) {
        console.log(req.file);
        
        ProductRepository.createProduct(req.body.title, req.body.description, req.body.price, req.file?.filename)
            .then(() => {
                res.redirect('/');
            }).catch(err => {
                res.flash("Could not add product");
                console.error(err);
                return res.redirect("/admin/")
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