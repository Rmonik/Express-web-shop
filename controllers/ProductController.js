let Product = require('../models/Product');

class ProductController {

    static addProduct(title) {
        let prod = new Product(title);
        prod.save();
    }
}

module.exports = ProductController;