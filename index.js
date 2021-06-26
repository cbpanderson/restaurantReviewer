var express = require('express');
const bodyParser = require('body-parser');
var pgp = require('pg-promise')({});
var db = pgp({database: 'restaurantReview'});
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

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

server.listen(3000, () => {
    console.log('listening on *:3000');
});