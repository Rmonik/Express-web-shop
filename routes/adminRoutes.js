const express = require('express');

const Router = express.Router();

const ProductController = require("../controllers/ProductController");
const Product = require('../models/Product');


// /admin/ +
Router.get('/', (req, res, next) => {
    console.log("this is the user ID: ", req.userId);
    res.render("admin/admin.ejs", {
        pageTitle: "Admin"
    });
});

Router.post('/add-product', ProductController.addProduct);


module.exports = Router;