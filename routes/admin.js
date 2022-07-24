const express = require('express');

const Router = express.Router();

Router.get('/', (req, res, next) => {
    res.render("add-product.ejs", {
        pageTitle: "Admin"
    });
});

Router.post('/add-product', (req, res, next) => {
    res.redirect('/');
});

module.exports = Router;