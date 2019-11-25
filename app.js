var express = require('express');
var path = require('path');

const config = require ("./bin/confing");

var indexRouter = require('./routes/register');


var createError = require('http-errors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();
config.connect();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);


module.exports = app;
