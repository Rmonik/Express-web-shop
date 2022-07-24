const express = require('express');

const Router = express.Router();

const adminRoutes = require('./admin');
const shopRoutes = require('./shop');


Router.use('/admin', adminRoutes);
Router.use('/shop', shopRoutes);

// redirect homepage to shop
Router.get("/", (req, res, next) => {
    res.redirect('/shop');
});

// 404 fallback
Router.use("/", (req, res, next) => {
    if(req.method = "GET"){
        res.status(404).render("404.ejs", {
            pageTitle: "Page not found"
        });
    }
    else {
        res.status(400).end();
    }
});

module.exports = Router;