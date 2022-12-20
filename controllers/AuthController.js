const SessionRepository = require('../models/SessionRepository');
const {extractSessionFromCookies} = require('../util/cookies');

class AuthController {

    static addAuthenticationInfoToRequest (req, res, next) {
        let session = "";
        try {
            session = extractSessionFromCookies(req.get('Cookie'));
        } catch (error) {
            return next();
        }
        console.log(session);
        SessionRepository.getUserFromSessionId(session)
            .then(data => {
                req.userId = data;
                return next();
            }).catch(err => {
                console.log("Could not find user attached to session. ");
            });
    }

    static protectRouteAuth (req, res, next) {
        if(!req.userId) return res.redirect("/login");
        return next();
    }
}

module.exports = AuthController;