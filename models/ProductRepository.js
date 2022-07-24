let fs = require('fs');

class ProductRepository {
    static saveProduct(title) {
        console.log(title);
        fs.appendFileSync('./models/products.txt', (title + "\n"), (err) => {
            console.log("this is the error", err);
        });
    }
}

module.exports = ProductRepository;