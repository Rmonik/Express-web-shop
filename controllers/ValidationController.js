const validator = require('validator');

class ValidationController {

    static validateAddProduct(req, res, next) {
        console.log(req.body);
        console.log(req.file);
        if(validator.isEmpty(req.body.price)) {
            res.flash("Must include a price.");
            return res.redirect("/admin");
        }
        if(validator.isEmpty(req.body.title)) {
            res.flash("Must include a title.");
            return res.redirect("/admin");
        }
        if(validator.isEmpty(req.body.description)) {
            res.flash("Must include a description.");
            return res.redirect("/admin");
        }
        if(!validator.isFloat(req.body.price)) {
            res.flash("Price must be a number.");
            return res.redirect("/admin");
        }
        return next();
    }

    static validateRegister(req, res, next) {

        if(validator.isEmpty(req.body.email) || !validator.isEmail(req.body.email)) {
            res.flash("Please enter a valid email address");
            return res.redirect("/login/register");
        }
        if(validator.isEmpty(req.body.email) || validator.isEmpty(req.body.password) || validator.isEmpty(req.body.firstname) || validator.isEmpty(req.body.lastname)) {
            res.flash("Please fill out all fields.");
            return res.redirect("/login/register");
        }

        return next();
    }
}

module.exports = ValidationController;