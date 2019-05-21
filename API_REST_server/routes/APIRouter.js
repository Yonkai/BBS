var express = require('express');
var router = express.Router();
var hidden_connection = require('../config/hidden-db.js');
//https://www.red-gate.com/simple-talk/sql/database-administration/ten-common-database-design-mistakes/
//4. Validation here and database logic here, parse logic out to functions and import them similar to the MDN example.
//Authorization/access control/Authentication later on prod. Also load any needed metadata information into database here.
//NEVER TRUST USER INPUT.

//Creaters------------------------------------------------------------------------------------------------------------------
router.post('/createthread', function(req, res, next) {
    console.log(req.body);
    //TODO:Implement pooling in prod!!!
    //make sure to reinstate fk restraints in prod.
    //https://stackoverflow.com/questions/14087924/cannot-enqueue-handshake-after-invoking-quit
    //Using '?' Automatically escapes values:
    //https://www.npmjs.com/package/mysql#escaping-query-values
    hidden_connection.query(`INSERT INTO threads (threads_comment,threads_subject,threads_username,boards_boards_id)
    VALUES (?,?,?,?)`,[req.body.comments,req.body.subject,req.body.name,req.body.boardsboardsid], function (error, results, fields) {
      if (error) throw error;
    });

    res.json(req.body);
});

router.post('/createreply', function(req, res, next) {
    console.log(req.body);
    //TODO:Implement pooling prod.
    //TODO (IMPORTANT): Reinstate FK constraints to prevent invalid data injection.
    //https://stackoverflow.com/questions/14087924/cannot-enqueue-handshake-after-invoking-quit
    //TODO: rerender/reconcile react when this router is hit so the comment appears immediately.
    
    hidden_connection.query(`INSERT INTO replys (replys_username,replys_comment,threads_threads_id,threads_boards_boards_id)
    VALUES (?,?,?,?);UPDATE threads SET threads_modified=CURRENT_TIMESTAMP WHERE threads_id=?;`,
    [req.body.name,req.body.comments,req.body.threadsthreadsid,req.body.threadsboardsboardsid,req.body.threadsthreadsid], function (error, results, fields) {
      if (error) throw error;

    });

    res.json(req.body);
});

//Readers------------------------------------------------------------------------------------------------------------------
router.post('/readboards', function(req, res, next) {
    console.log(req.body);
    
    //SELECT all columns from boards table from MySQL database:
    hidden_connection.query('SELECT * FROM boards', function (error, results, fields) {
      if (error) throw error;
      console.log('The boards are: ', results);
      res.json(results);
    });
    
});

router.post('/readthreads/:boardsid', function(req, res, next) {
  console.log(req.body);
  //!!!!!!!!!!!!!!!!!!!!!! VALIDATE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ESCAPE !!!!!!!!!!!!!!!!!!!!!!
  //TEST TEST TEST, this is a SQL injection choke point. Never trust user input. MySQL driver docs seems to show to escape
  //but double check that.

  //Technically inaccurate for threads posting at the same second, but it seems like a minor issue.
  hidden_connection.query(`SELECT * FROM threads WHERE boards_boards_id=? ORDER BY threads_modified DESC`,req.params.boardsid, function (error, results, fields) {
    if (error) throw error;
    console.log('The threads are: ', results);
    console.log('boardsid is ',req.params.boardsid);
    res.json(results);
  });
});

router.post('/readexclusivereplys/:threadsthreadsid', function(req, res, next) {
  console.log(req.body);

  hidden_connection.query(`SELECT * FROM replys WHERE threads_threads_id=?`,req.params.threadsthreadsid, function (error, results, fields) {
    if (error) throw error;
    console.log('The exclusive replys are: ', results);
    console.log('threadsthreadsid is ',req.params.threadsthreadsid);
    res.json(results);
  });
});

router.post('/readexclusivethread/:threadsid', function(req, res, next) {
  console.log(req.body);

  hidden_connection.query(`SELECT * FROM threads WHERE threads_id=?`,req.params.threadsid, function (error, results, fields) {
    if (error) throw error;
    console.log('The exlcusive thread is: ', results);
    res.json(results);
  });
});

router.post('/readthreadsreplycount/:threadsthreadsid', function(req, res, next) {
  console.log(req.body);
  
  hidden_connection.query(`SELECT threads.threads_id,COUNT(replys.threads_threads_id) AS number_of_replys
  FROM threads LEFT JOIN replys ON (threads.threads_id = replys.threads_threads_id)
  WHERE threads.threads_id=?`,req.params.threadsthreadsid, function (error, results, fields) {
    if (error) throw error;
    console.log('Reply count is: ', results);
    res.json(results);
  });
});

router.post('/readallthreadsreplycount', function(req, res, next) {
  console.log(req.body);
  
  hidden_connection.query(`SELECT threads.threads_id,COUNT(replys.threads_threads_id) AS number_of_replys         
  FROM threads LEFT JOIN replys ON (threads.threads_id = replys.threads_threads_id)
   GROUP BY threads.threads_id`, function (error, results, fields) {
    if (error) throw error;
    console.log('The original replys/thread starters are and also threads are: ', results);
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

router.post('/readtotalreplys', function(req, res, next) {
  console.log(req.body);
  
  //Select replys total count
  hidden_connection.query('SELECT COUNT(*) AS "totalreplycount" FROM replys', function (error, results, fields) {
    if (error) throw error;
    res.json(results);
  });
});


//Updaters------------------------------------------------------------------------------------------------------------------
router.post('/updatereply', function(req, res, next) {
    console.log(req.body);

    hidden_connection.query('SELECT 222 + 333 AS solution', function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is: ', results);
    });

    res.json(req.body);
});

//Deleters------------------------------------------------------------------------------------------------------------------
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
