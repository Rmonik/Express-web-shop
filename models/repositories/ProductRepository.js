let BaseRepository = require("../../core/BaseRepository");
let Product = require("../modeldefinitions/Product");


class ProductRepository extends BaseRepository {

    static createProduct (title, description, price, imageurl) {
        return new Promise((resolve, reject) => {
            this.query(`insert into products(title, description, price, imageurl) values (?, ?, ?, ${imageurl ? "?" : null })`, 
            [title, description, price, imageurl])
                .then(data => {
                    resolve(data.insertId);
                }).catch(err => {
                    console.log("Could not create product:");
                    reject(err);
                });
        });
    }

    static getProductById (id) {
        return new Promise((resolve, reject) => {
            this.query("SELECT id, title, description, price, imageurl FROM products WHERE id = ?", [id])
                .then(data => {
                    let p = new Product(data.id, data.title, data.description, data.price, data.imageurl);
                    resolve(p);
                })
                .catch(err => {
                    reject(err)
                });
        });
    }

    static getProducts () {
        return new Promise((resolve, reject) => {
            console.log("querying getProducts()");
            this.query(`select id, title, description, price, imageurl from products`)
                .then(data => {
                    let products = data.map(d => new Product(d.id, d.title, d.description, d.price, d.imageurl));
                    resolve(products);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }


}

module.exports = ProductRepository;