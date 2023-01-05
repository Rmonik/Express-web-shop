const BaseRepository = require("../../core/BaseRepository");

class OrderRepository extends BaseRepository{

    static async createOrder(userId, price, productIds) {
        try {
            let order = await this.query(`INSERT INTO orders (user, price) VALUES (?, ?)`, [userId, price]);
            order = order.insertId;
            for(let product of productIds) {
                await this.query("INSERT INTO order_products (`order`, `product`) VALUES (?, ?)", [order, product]);
            }
        }
        catch (err) {
            throw new Error("something went wrong: " + err);
        }
    }
}

module.exports = OrderRepository;