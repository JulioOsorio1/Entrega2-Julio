
const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');
const viewsRouter = require('./routes/views.router');
const productsManager = require('./utils/productsManager')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use('/', viewsRouter);

module.exports = app;
