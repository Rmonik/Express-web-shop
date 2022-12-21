const {extractFlashMessageFromCookies} = require('../util/cookies');


class FlashController {

    static flashMessages(req, res, next) {
        res.flash = function (message) {
            res.cookie("flashmessage", message, {maxAge: 1000*60*5});
        }
        let m;
        try {
            m = extractFlashMessageFromCookies(req.get('Cookie'));
            console.log(m);
            req.flashMessage = decodeURI(m);
            res.clearCookie("flashmessage");
        } catch (error) {
            console.log("No flash messages");
        }
        next();
    }

}

module.exports = FlashController;