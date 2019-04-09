var express = require('express');
var router = express.Router();
var hidden_connection = require('./hidden-db.js');
var seedGen = require('./seed-data');

router.post('/database', function(req, res, next) {
    console.log(req.body);
    var seed = seedGen();
    console.log(seed);

    //Seeding Replys
    for(i=0;i<5;i++){
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

    //res.json(req.body);
});

module.exports = router;
