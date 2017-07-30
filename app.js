var express = require('express');
var path = require('path');
// var favicon = require('serve-favicon');
var fs = require('fs');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
var cors = require('cors');
// var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var patient = require('./routes/patient');
var doctors = require('./routes/doctors');
var reception = require('./routes/reception');
var compounder = require('./routes/compounder');
var dataStore=require('./routes/datastore');
var appointments=require('./routes/scheduling');
var records=require('./routes/record');

var app = express();

app.use(cors());
mongoose.connect('mongodb://skit:skit@ds129053.mlab.com:29053/h_patient');
var db=mongoose.connection;
var multer  = require('multer');

var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'});
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('combined', {stream: accessLogStream}));
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('combined'));
// app.use(body-parser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/patient', patient);
app.use('/doctors', doctors);
app.use('/reception', reception);
app.use('/compounder', compounder);
app.use('/dataStore', dataStore);
app.use('/appointments',appointments);
app.use('/records',records);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
