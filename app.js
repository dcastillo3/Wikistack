const express = require('express');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const chalk = require('chalk');
const pg = require('pg');
const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
    logging: false
});
const app = express();
const models = require('./models');
// const router = require('./routes');

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});
app.use(express.static('public'));
const router = require('./routes');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(router);



app.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Wikistacks',
    });
});

models.Page.sync().then(() => {
    // Table created
    console.log(chalk.green('Page table created'));
    return models.User.sync();
})
.then(function () {
    console.log(chalk.green('User table created'));
    app.listen('3000', function () {
        console.log('Server is listening on port 3000');
    });
})
.catch(console.error.bind(console));
