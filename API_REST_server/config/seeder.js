var express = require('express');
var router = express.Router();
var hidden_connection = require('./hidden-db.js');
var seedGen = require('./seed-data');

router.post('/database', function(req, res, next) {
    console.log(req.body);
    var seed = seedGen();
    console.log(seed);

    //Seeding threads
    for(i=0;i<seed.threadCount;i++){
        //Send seeding data into database:
        hidden_connection.query('INSERT INTO threads (threads_comment,threads_subject,threads_username,boards_boards_id) VALUES (?,?,?,?)',
        [seed.seedThreads[i].threads_comment,
        seed.seedThreads[i].threads_subject,
        seed.seedThreads[i].threads_username,
        seed.seedThreads[i].boards_boards_id],
        function (error, results, fields) {
        if (error) throw error;
        });
    }
    //Seeding Replys, TODO: needs some normalization design fixes
    for(i=0;i<seed.replyCount;i++){
        //Send seeding data into database:
        hidden_connection.query('INSERT INTO replys (replys_username,replys_comment,threads_threads_id,threads_boards_boards_id) VALUES (?,?,?,?)',
        [seed.seedReplys[i].replys_username,
        seed.seedReplys[i].replys_comment,
        seed.seedReplys[i].threads_threads_id,
        seed.seedReplys[i].threads_boards_boards_id],
        function (error, results, fields) {
        if (error) throw error;
        });
    }

    hidden_connection.end();
    //res.json(req.body);
});

module.exports = router;
