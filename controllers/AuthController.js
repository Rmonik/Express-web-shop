const SessionRepository = require('../models/repositories/SessionRepository');
const {extractSessionFromCookies} = require('../util/cookies');

class AuthController {

    static addAuthenticationInfoToRequest (req, res, next) {
        let session = "";
        try {
            session = extractSessionFromCookies(req.get('Cookie'));
        } catch (error) {
            return next();
        }
        SessionRepository.getUserFromSessionId(session)
            .then(data => {
                req.userId = data;
            }).catch(err => {
                console.log("Could not find user attached to session. ");
            }).finally(() =>
                next()
            )
    }

    static protectRouteAuth (req, res, next) {
        if(!req.userId) {
            return res.redirect("/login");
        }
        return next();
    }
}

module.exports = AuthController;