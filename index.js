var express = require('express');
const bodyParser = require('body-parser');

var pgp = require('pg-promise')();
var db = pgp(process.env.DATABASE_URL || {database: 'restaurantReview'});
const http = require('http');
var app = express();
const es6Renderer = require('express-es6-template-engine');

app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');
// const server = http.createServer(app);

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