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
        hidden_connection.query('INSERT INTO threads (reply_count,subject,board_position,board_owner) VALUES (?,?,?,?)',
        [seed.seedThreads[i].reply_count,
        seed.seedThreads[i].subject,
        seed.seedThreads[i].board_position,
        seed.seedThreads[i].board_owner],
        function (error, results, fields) {
        if (error) throw error;
        });
    }
    //Seeding Replys, TODO: needs some normalization design fixes
    for(i=0;i<seed.replyCount;i++){
        //Send seeding data into database:
        hidden_connection.query('INSERT INTO replys (reply_in_thread_pos,reply_original,reply_username,reply_comment,thread_owner) VALUES (?,?,?,?,?)',
        [seed.seedReplys[i].reply_in_thread_pos,
        seed.seedReplys[i].reply_original,
        seed.seedReplys[i].reply_username,
        seed.seedReplys[i].reply_comment,
        seed.seedReplys[i].thread_owner],
        function (error, results, fields) {
        if (error) throw error;
        });
    }

    hidden_connection.end();
    //res.json(req.body);
});

module.exports = router;
