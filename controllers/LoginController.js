const User = require('../models/modeldefinitions/User');
const UserRepository = require('../models/repositories/UserRepository');
const SessionRepository = require('../models/repositories/SessionRepository');
const FlashController = require('./FlashController');

class LoginController {

    static getLogin(req, res, next) {
        res.render("login/login.ejs", {
            pageTitle: "Login",
            loggedIn: !!req.userId,
            flashmessage: req.flashMessage,
        });
    }

    static getRegister(req, res, next) {
        res.render("login/register.ejs", {
            pageTitle: "Login",
            loggedIn: !!req.userId,
            flashmessage: req.flashMessage,
        });
    }

    static login(req, res, next) {
        let email = req.body.email;
        let password = req.body.password;
        UserRepository.logInUser(email, password)
            .then(user => {
                return SessionRepository.createSession(user.id);
            }).then(sessionId => {
                console.log(sessionId);
                res.flash("Succesfully logged in.");
                res.cookie("session", sessionId, {maxAge: 1000*60*60*24});
                return res.redirect("/shop");
            })
            .catch(err => {
                console.log(err);
                res.flash("Incorrect email or password");
                return res.redirect("/login");
            })
    }

    static register(req, res, next) {
        UserRepository.createUser(req.body.email, req.body.firstname, req.body.lastname, req.body.password)
            .then(() => {
                res.flash("Account created, you can now log in!");
                res.redirect("/login");
            })
            .catch((err) => {
                res.flash("Could not create account -- Something went wrong");
                res.redirect("/login/register");
            })
    }

    static logout(req, res, next) {
        req.userId = null;
        res.clearCookie("session");
        res.redirect("/shop");
    }
    
}


module.exports = LoginController;