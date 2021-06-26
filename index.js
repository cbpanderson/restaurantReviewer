var express = require('express');
const bodyParser = require('body-parser');

var pgp = require('pg-promise')();
var db = pgp(process.env.DATABASE_URL || {database: 'test'});

// var db = pgp({database: 'restaurantReview'});
const http = require('http');
// const hostname = '127.0.0.1';
// const port = 8000;

var app = express();

const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);

app.set('views', 'templates');
app.set('view engine', 'html');

const server = http.createServer(app);
const db = require('./db');

//middleware
app.use(bodyParser.urlencoded());
app.use('/public', express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

var PORT = process.env.PORT || 8000;
app.listen(PORT, function () {
  console.log('Listening on port ' + PORT);
});

// server.listen(8000, () => {
//     console.log('listening on *:8000');
// });