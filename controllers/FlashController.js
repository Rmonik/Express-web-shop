const {extractFlashMessageFromCookies} = require('../util/cookies');


class FlashController {

    static flashMessages(req, res, next) {
        res.flash = function (message) {
            res.cookie("flashmessage", message, {maxAge: 1000*60*1});
        }
        let m;
        try {
            m = extractFlashMessageFromCookies(req.get('Cookie'));
            req.flashMessage = decodeURI(m);
            res.clearCookie("flashmessage");
        } catch (error) {
            // nothing
        }
        next();
    }

}

module.exports = FlashController;