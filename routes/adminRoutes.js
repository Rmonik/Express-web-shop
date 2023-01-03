const express = require('express');

const Router = express.Router();

const ProductController = require("../controllers/ProductController");
const Product = require('../models/modeldefinitions/Product');
const ValidationController = require('../controllers/ValidationController.js');


// /admin/ +
Router.get('/', (req, res, next) => {
    console.log("this is the user ID: ", req.userId);
    res.render("admin/admin.ejs", {
        pageTitle: "Admin",
        loggedIn: !!req.userId,
        flashmessage: req.flashMessage,
    });
});

Router.post('/add-product', ValidationController.validateAddProduct, ProductController.addProduct);


module.exports = Router;