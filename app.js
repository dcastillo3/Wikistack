const express = require('express');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const pg = require('pg');
const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack');
const app = express();

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});
app.use(express.static('public'));
// const routes = require('../routes');

app.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Wikistacks',
    });
});

const Page = db.define('page', {
    title: {type: Sequelize.STRING, allowNull: false, defaultValue: 'Wikipage'},
    urltitle: {type: Sequelize.STRING, allowNull: false, defaultValue: 'Wikipage'},
    content: {type: Sequelize.TEXT},
    status: {type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false}
});

const User = db.define('user', {
    name: {type: Sequelize.STRING, allowNull: false},
    email: {type: Sequelize.STRING, allowNull: false}
});

Page.sync();
User.sync();

app.listen('3000');