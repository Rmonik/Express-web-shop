

function extractSessionFromCookies (cookies) {
    return cookies.split(";").find(element => element.includes("session")).split("=")[1];
}

function extractFlashMessageFromCookies (cookies) {
    return cookies.split(";").find(element => element.includes("flash")).split("=")[1];
}

module.exports = {
    extractSessionFromCookies,
    extractFlashMessageFromCookies
}