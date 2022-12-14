const mysql = require("mysql2");

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'nodetraining',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

module.exports = db;
