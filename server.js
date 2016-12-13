process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('./config/mongoose'),
	express = require('./config/express'),
	passport = require('./config/passport');

var db = mongoose();
var app = express();
var svPort = 3000;
var passport = passport();

app.listen(svPort);

module.exports = app; //for testing

console.log('Server running at http://localhost:'+ svPort + '/');