let db = require('../core/Database');

class BaseRepository {

    constructor () {

    }

    static query (query, params) {
        return new Promise((resolve, reject) => {
            db.query(query, params, (err, result) => {
                if(err) reject(err);
                resolve(result);
            });
        });
    }
}

module.exports = BaseRepository;