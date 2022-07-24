const express = require('express');
const ProductController = require('../controllers/ProductController');

const Router = express.Router();

Router.get('/', (req, res, next) => {
    let products = ProductController.getProducts();
    console.log("products", products);
    res.render("shop.ejs", {
        pageTitle: "Shop",
        products: products
    });
});

module.exports = Router;