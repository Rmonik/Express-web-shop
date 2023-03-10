const express = require('express');

const Router = express.Router();

const adminRoutes = require('./adminRoutes');
const shopRoutes = require('./shopRoutes');
const cartRoutes = require('./cartRoutes');
const loginRoutes = require('./loginRoutes');
const AuthController = require('../controllers/authController');
const FlashController = require('../controllers/FlashController');

Router.use('/', AuthController.addAuthenticationInfoToRequest);
Router.use('/', FlashController.flashMessages);
Router.use('/admin', AuthController.protectRouteAuth, adminRoutes);
Router.use('/shop', shopRoutes);
Router.use('/cart', AuthController.protectRouteAuth, cartRoutes);
Router.use('/login', loginRoutes);

// redirect homepage to shop
Router.get("/", (req, res, next) => {
    return res.redirect('/shop');
});

// 404 fallback
Router.use("/", (req, res, next) => {
    if(req.method = "GET"){
        res.status(404).render("404.ejs", {
            pageTitle: "Page not found",
            loggedIn: !!req.userId,
            flashmessage: req.flashMessage,
            
        });
    }
    else {
        res.status(400).end();
    }
});

module.exports = Router;