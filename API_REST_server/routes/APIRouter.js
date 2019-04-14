var express = require('express');
var router = express.Router();
var hidden_connection = require('../config/hidden-db.js');

//4. Validation here and database logic here, parse logic out to functions and import them similar to the MDN example.
//Authorization/access control/Authentication later on prod. Also load any needed metadata information into database here.

//Creaters
router.post('/createthread', function(req, res, next) {
    console.log(req.body);
    //TODO:Implement pooling prod.
    //https://stackoverflow.com/questions/14087924/cannot-enqueue-handshake-after-invoking-quit
    
    hidden_connection.query('SELECT 888 + 32 AS solution',req.body.name, function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is: ', results[0].solution);
    });

    res.json(req.body);
});

router.post('/createreply', function(req, res, next) {
    console.log(req.body);
    //TODO:Implement pooling prod.
    //https://stackoverflow.com/questions/14087924/cannot-enqueue-handshake-after-invoking-quit
    
    hidden_connection.query('SELECT 2000 + 1111 AS solution',req.body.name, function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is: ', results[0].solution);
    });

    res.json(req.body);
});


//Readers
router.post('/readboards', function(req, res, next) {
    console.log(req.body);
    
    //SELECT all columns from boards table from MySQL database:
    hidden_connection.query('SELECT * FROM boards', function (error, results, fields) {
      if (error) throw error;
      console.log('The boards are: ', results);
      res.json(results);
    });
    
});

router.post('/readthreads', function(req, res, next) {
  console.log(req.body);
  
  //SELECT all columns from threads table from MySQL database:
  hidden_connection.query('SELECT * FROM threads', function (error, results, fields) {
    if (error) throw error;
    console.log('The threads are: ', results);
    res.json(results);
  });
});

router.post('/readreplys', function(req, res, next) {
  console.log(req.body);
  
  //SELECT all columns from replys table from MySQL database:
  hidden_connection.query('SELECT * FROM replys', function (error, results, fields) {
    if (error) throw error;
    res.json(results);
  });
});


//Updaters
router.post('/updatereply', function(req, res, next) {
    console.log(req.body);

    hidden_connection.query('SELECT 222 + 333 AS solution', function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is: ', results);
    });

    res.json(req.body);
});

//Deleters
router.post('/deletethread', function(req, res, next) {
    console.log(req.body);

    hidden_connection.query('SELECT 222 + 333 AS solution', function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is: ', results[0].solution);
    });

    res.json(req.body);
});

router.post('/deletereply', function(req, res, next) {
  console.log(req.body);

  hidden_connection.query('SELECT 222 + 333 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
  });

  res.json(req.body);
});

module.exports = router;
