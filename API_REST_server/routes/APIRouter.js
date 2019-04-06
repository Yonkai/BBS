var express = require('express');
var router = express.Router();
var hidden_connection = require('../config/hidden-db.js');

//Creaters
router.post('/threadpost', function(req, res, next) {
    console.log(req.body);
    //TODO:Implement pooling prod.
    //https://stackoverflow.com/questions/14087924/cannot-enqueue-handshake-after-invoking-quit
    
    //test code
    hidden_connection.query('INSERT INTO boards (board_name) VALUES (?)',req.body.name, function (error, results, fields) {
      if (error) throw error;
    });

    res.json(req.body);
});

//Readers
router.post('/fillboard', function(req, res, next) {
    console.log(req.body);
    
    //test code
    hidden_connection.connect();
    hidden_connection.query('SELECT 222 + 333 AS solution', function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is: ', results[0].solution);
    });
    hidden_connection.end();

    res.json(req.body);
});

//Updaters
router.post('/editpost', function(req, res, next) {
    console.log(req.body);
    
    //test code
    hidden_connection.connect();
    hidden_connection.query('SELECT 222 + 333 AS solution', function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is: ', results[0].solution);
    });
    hidden_connection.end();

    res.json(req.body);
});

//Deleters
router.post('/deletethread', function(req, res, next) {
    console.log(req.body);
    
    //test code
    hidden_connection.connect();
    hidden_connection.query('SELECT 222 + 333 AS solution', function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is: ', results[0].solution);
    });
    hidden_connection.end();

    res.json(req.body);
});


module.exports = router;
