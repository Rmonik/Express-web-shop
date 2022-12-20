let crypto = require('crypto');

function hash(word) {
    return crypto.createHash("sha256").update(word).digest('base64');
}

function generateRandomHash(password) {
    return crypto.randomBytes(20).toString('hex');
}

module.exports = {
    hash,
    generateRandomHash,
}