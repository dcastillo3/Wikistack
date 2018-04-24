const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// const routes = require('../routes');

app.get('/', function(req, res, next) {
    console.log('hello');
});

app.listen('3000');