let Product = require('../models/Product');
let ProductRepository = require('../models/ProductRepository');

class ProductController {

    static addProduct(title) {
        let prod = new Product(title);
        prod.save();
    }

    static getProducts() {
        let arr = [];
        arr = ProductRepository.getProducts();
        return arr;
    }
}

module.exports = ProductController;