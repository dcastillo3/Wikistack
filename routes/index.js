const express = require('express');
const router = express.Router();
const models = require('../models');
const chalk = require('chalk');

const wikiRouter = require('./wiki/wiki.js');
const userRouter = require('./user/user.js');

router.use('/wiki', wikiRouter);
router.use('/user', userRouter);


router.all('/', function(req, res, next) {
    if (req.method == 'GET') {
    }
    if (req.method == 'POST') {

    }
})

router.get('/add', function (req, res, next) {

})

module.exports = router;