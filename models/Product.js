let ProductRepository = require('./ProductRepository');

class Product {

    constructor(title) {
        this.title = title;
    }

    save() {
        ProductRepository.saveProduct(this.title);
    }

}

module.exports = Product;