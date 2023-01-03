class User {

    constructor(id, email, firstname, lastname, password, salt) {
        this.id = id;
        this.email = email;
        this.firstname = firstname;
        this.lastname = lastname;
        this.password = password;
        this.salt = salt;
    }
}

module.exports = User;