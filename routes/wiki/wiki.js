const express = require('express');
const router = express.Router();
const models = require('../../models');
const chalk = require('chalk');


router.get('/', function(req, res, next) {
    res.send('response to GET request to /wiki/');
  });
  
  router.post('/', function(req, res, next) {
    res.send('response to POST request to /wiki/');
  });
  
  router.get('/add', function(req, res, next) {
    res.render('addpage');
  });


module.exports = router;