/**
 * Created by Warren.Watkinson on 4/13/2016.
 * Copied over by Nick Harron and Caleb Winningham on 4/21/2016.
 *
 */
var bodyParser = require('body-parser');
var csrf = require('csurf');
var express = require('express');
var session = require('client-sessions');
var path = require('path');
var port = process.argv[2] || 3000;
var authUtil = require('./server/services/authUtil');

// setup express app
var app = express();

// view settings
app.set('views',path.join(__dirname,'server/views'));
app.set('view engine', 'ejs');

// app middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  cookieName: 'session',
  secret: 'keyboard cat',
  duration: 30 * 60 * 1000,
  activeDuration: 5 * 60 * 1000
}));

app.use(csrf());
app.use(authUtil.simpAuth);

// route middleware
var routes = require(path.join(__dirname,'server/controllers','routes'));
app.use(routes);

// start server
app.listen(port, function() {
  var d = new Date();
  console.log(d.toUTCString() + ': Listening on port ' + port + '...');
});