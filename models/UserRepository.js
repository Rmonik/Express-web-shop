const BaseRepository = require("../core/BaseRepository");
const AuthRepository = require("./AuthRepository");
const User = require("./User");




class UserRepository extends BaseRepository {

    static createUser(email, firstname, lastname, password) {
        const salt = AuthRepository.generateSalt();
        const hashedPass = AuthRepository.hashPassword(password, salt);
        return new Promise((resolve, reject) => {
            this.query(`insert into users (email, firstname, lastname, password, salt) values (?, ?, ?, ?, ?)`, [email, firstname, lastname, hashedPass, salt])
                .then(data => {
                    console.log(data);
                    // resolve(user);
                }).catch(err => {
                    console.log("Could not create user: ", err);
                });
        });
    }

    static logInUser(email, password) {
        return this.getUserByEmail(email)
            .then(user => {
                // check if password matches
                let checkpass = AuthRepository.hashPassword(password, user.salt);
                if(checkpass === user.password) {
                    return user;
                } else {
                    throw new Error("Password incorrect");
                }
            }).catch(err => {
                throw err;
            })
    }

    static getUserByEmail(email) {
        return new Promise((resolve, reject) => {
            this.query("select id, email, firstname, lastname, password, salt from users where email = ?", [email])
                .then(data => {
                    const user = new User(data[0].id, data[0].email, data[0].firstname, data[0].lastname, data[0].password, data[0].salt);
                    resolve(user);
                }).catch(err => {
                    reject("could not get user by email");
                })
        });
    }
}

module.exports = UserRepository;