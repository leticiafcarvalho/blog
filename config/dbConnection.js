let mysql = require('mysql');

module.exports = function () {
    return connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: "250599",
        database: 'dsw',
        port: '3306'
    });
}
