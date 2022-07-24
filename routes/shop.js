const express = require('express');

const Router = express.Router();

Router.get('/', (req, res, next) => {
    res.render("shop.ejs", {
        pageTitle: "Shop"
    });
});

module.exports = Router;