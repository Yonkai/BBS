var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');

var APIRouter = require('./routes/APIRouter');
var SeedRouter =require('./config/seeder')

var app = express();

app.use(logger('dev'));
app.use(express.json());

// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  //Make sure to change this to only the nextjs server in production, setting * for the header value
  //can be a security issue. (So that anyone can't just send a POST request from anywhere.)
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
app.use('/api', APIRouter);
app.use('/seed', SeedRouter);

module.exports = app;
