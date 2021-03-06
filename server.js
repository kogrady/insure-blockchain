/**
 * Set up
 */
var express  = require('express');
var app      = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var port  	 = process.env.PORT || 3000;

var router = require('./router');

app.use(express.static(__dirname + '/public/dist'));                 // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());


/**
 * Routes
 */
app.use('/api', router);

/**
 * Not API - send back HTML.
 */
app.get('*', function(req, res) {
	res.sendfile('./public/dist/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

/**
 * Start server
 */
app.listen(port);
console.log('Started server on port: ', port);
