//every call to require('./db') will get exactly the same object returned, if it would resolve to the same file.
var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : '127.0.0.1',
    port     : 3306,
    user     : 'root',
    password : '',
    database : 'bbs',
    charset  : 'utf8mb4',
    multipleStatements: true

});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;