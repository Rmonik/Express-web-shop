const express = require('express');

const Router = express.Router();

const ProductController = require("../controllers/ProductController");
const Product = require('../models/Product');

Router.get('/', (req, res, next) => {
    res.render("admin/admin.ejs", {
        pageTitle: "Admin"
    });
});

Router.post('/add-product', ProductController.addProduct);


module.exports = Router;