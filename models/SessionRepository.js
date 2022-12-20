const BaseRepository = require("../core/BaseRepository");
const {generateRandomHash} = require("../util/hashing");

class SessionRepository extends BaseRepository {

    static createSession(userId) {
        const sessionId = generateRandomHash();
        console.log(userId, sessionId);
        return new Promise((resolve, reject) => {
            this.query("insert into sessions (session, user) values (?, ?)",
                [sessionId, userId])
                .then(data => resolve(sessionId))
                .catch(err => {
                    reject("Could not create session: ", err);
                });
        });
    }

    static getUserFromSessionId(sessionId) {
        return new Promise((resolve, reject) => {
            this.query("select user from sessions where session = ?", [sessionId])
                .then(data => {
                    resolve(data[0].user);
                })
                .catch(
                    err => reject("Could not find session in DB: ", err));
        });
    }
}

module.exports = SessionRepository;