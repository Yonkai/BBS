var express = require('express');
var router = express.Router();
var hidden_connection = require('./hidden-db.js');
var seedGen = require('./seed-data');

//Creaters
router.post('/database', function(req, res, next) {
    console.log(req.body);
    seedGen();

    //test code
    // hidden_connection.query('INSERT INTO boards (board_name) VALUES (?)',req.body.name, function (error, results, fields) {
    //   if (error) throw error;
    // });
    //res.json(req.body);
});

module.exports = router;
