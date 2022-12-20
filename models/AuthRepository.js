let {hash, generateRandomHash} = require('../util/hashing');

class AuthRepository {

    static generateSalt() {
        return generateRandomHash();
    }

    static hashPassword(password, salt) {
        return hash(password.concat(salt));
    }

    static checkPassword(password, hashedPass, salt) {
        
        return this.hashPassword(password, salt) === hashedPass;
    }
}

module.exports = AuthRepository;