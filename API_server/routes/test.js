var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
    console.log(req.body);
    res.json({"_id":"5c9d9b8c81d2c615c98b34cd",
    "isActive":false,"balance":"$3,164.82",
    "picture":"http://placehold.it/32x32","age":22,
    "eyeColor":"brown","name":"Decker Gibson"});
});

module.exports = router;
