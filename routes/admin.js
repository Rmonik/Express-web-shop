const express = require('express');

const Router = express.Router();

const ProductController = require("../controllers/ProductController");

Router.get('/', (req, res, next) => {
    res.render("add-product.ejs", {
        pageTitle: "Admin"
    });
});

Router.post('/add-product', (req, res, next) => {
    ProductController.addProduct(req.body.content);
    res.redirect('/');
});

module.exports = Router;