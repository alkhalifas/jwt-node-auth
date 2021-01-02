var express = require('express'),
    stater  = require('./stater');

var app = module.exports = express.Router();

app.get('/api/random-quote', function(req, res) {
    res.status(200).send(stater.getRandomOne());
});