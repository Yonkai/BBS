var express = require('express');
var router = express.Router();
var hidden_connection = require('../hidden-db.js');

//Creaters
router.post('/', function(req, res, next) {
    console.log(req.body);

    //test code
    hidden_connection.query('INSERT INTO boards (board_name) VALUES (?)',req.body.name, function (error, results, fields) {
      if (error) throw error;
    });

    res.json(req.body);
});

module.exports = router;
