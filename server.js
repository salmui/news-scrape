//dependencies
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var logger = require('morgan');

mongoose.Promise = Promise;

//initialize Express app
var express = require('express');
var app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static(process.cwd() + '/public'));

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//connecting to MongoDB
mongoose.connect('mongodb://heroku_gj8pd990:9uqsp4mcatub4vcbd164khiste@ds129344.mlab.com:29344/heroku_gj8pd990');

var db = mongoose.connection;
db.on('error', function(error) {
  console.log("Mongoose Error: ", error);
});
db.once('open', function() {
  console.log('Mongoose connection successful.')
});

var routes = require('./controller/controller.js');
app.use('/', routes);

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Listening on PORT ' + port);
});
