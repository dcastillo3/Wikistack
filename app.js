const express = require('express');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const pg = require('pg');
const Sequalize = require('sequelize');
const db = new Sequalize('postgres://localhost:5432/wikistack');
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

app.listen('3000');