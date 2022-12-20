const User = require('../models/User');
const UserRepository = require('../models/UserRepository');
const SessionRepository = require('../models/SessionRepository');

class LoginController {

    static getLogin(req, res, next) {
        res.render("login/login.ejs", {
            pageTitle: "Login",
        });
    }

    static getRegister(req, res, next) {
        res.render("login/register.ejs", {
            pageTitle: "Login",
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
                res.cookie("session", sessionId, {maxAge: 1000*60*60*24});
                return res.redirect("/shop");
            })
            .catch(err => {
                console.log(err);
                return res.redirect("/login");
            })
    }

    static register(req, res, next) {
        UserRepository.createUser(req.body.email, req.body.firstname, req.body.lastname, req.body.password).then(res.redirect("/login"));
    }

}


module.exports = LoginController;