const BaseRepository = require("../../core/BaseRepository");

class CartRepository extends BaseRepository {

    static getCartItems(userId) {
        let q = `
            select products.id, products.title, products.description, products.price
            from cart_products
            join products on products.id = cart_products.product
            where cart_products.user = ?`;
        return this.query(q, [userId])
    }

    static addToCart(product, user) {
        return this.query(`insert into cart_products (user, product) values (?, ?)`, [user, product]);
    }

    static emptyCart(userId) {
        return this.query(`DELETE FROM cart_products where user = ?`, [userId]);
    }


}

module.exports = CartRepository;