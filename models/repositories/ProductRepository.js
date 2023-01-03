let BaseRepository = require("../../core/BaseRepository");
let Product = require("../modeldefinitions/Product");


class ProductRepository extends BaseRepository {

    static createProduct (product) {
        return new Promise((resolve, reject) => {
            console.log(product);
            if(! (product instanceof Product)) reject("Cannot save product: product is not an instance of Product");
            this.query("insert into products(title, description, price) values (?, ?, ?)", 
            [product.title, product.description, product.price])
                .then(data => {
                    product.id = data.insertId;
                    resolve(product);
                }).catch(err => {
                    console.log("Could not create product:");
                    reject(err);
                });
        });
    }

    static getProductById (id) {
        return new Promise((resolve, reject) => {
            console.log("running query...");
            this.query("SELECT id, title, description, price FROM products WHERE id = ?", [id])
                .then(data => {
                    let p = new Product(...data);
                    resolve(p);})
                .catch(err => {
                    reject(err)
                });
        });
    }

    static getProducts () {
        return new Promise((resolve, reject) => {
            console.log("querying getProducts()");
            this.query(`select id, title, description, price from products`)
                .then(data => {
                    let products = data.map(d => new Product(d.id, d.title, d.description, d.price));
                    resolve(products);
                })
                .catch(err => {
                    reject(err);
                })
        });
    }

}

module.exports = ProductRepository;