const express = require('express');

const Router = express.Router();

const adminRoutes = require('./adminRoutes');
const shopRoutes = require('./shopRoutes');
const cartRoutes = require('./cartRoutes');
const loginRoutes = require('./loginRoutes');


Router.use('/admin', adminRoutes);
Router.use('/shop', shopRoutes);
Router.use('/cart', cartRoutes);
Router.use('/login', loginRoutes);

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