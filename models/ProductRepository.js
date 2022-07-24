let fs = require('fs');

class ProductRepository {
    static saveProduct(title) {
        console.log(title);
        fs.appendFileSync('./models/products.txt', (title + "\n"), (err) => {
            console.log("this is the error", err);
        });
    }

    static getProducts() {
        let arr = fs.readFileSync('./models/products.txt', 'utf8');
        arr = arr.split('\n');
        return arr;
    }
}

module.exports = ProductRepository;