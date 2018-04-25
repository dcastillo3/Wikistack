const express = require('express');
const router = express.Router();
const models = require('../../models');
const chalk = require('chalk');
const pg = require('pg');
const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
    logging: false
});
const Models = require('../../models');

//Find All Users
router.get('/', function(req, res, next) {
    let allUsers = Models.User.findAll({
    }).then(function(users) {
        res.send(users);
    })

    console.log(allUsers);
});

//POST
router.get('/:username&:email', function (req, res, next) {
    let username = req.params.username;
    let email = req.params.email;
    Models.User.create({
        name: username,
        email: email
    }).then(user => {
        console.log(`${username} is created with email of ${email}`);
    })
})

router.get('/:username', function(req, res, next) {
    let username = req.params.username;
})

module.exports = router;