let mysql = require('mysql');

module.exports = function () {
    return connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: "3245",
        database: 'blog',
        port: '3306'
    });
}
