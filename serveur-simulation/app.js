const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const appareilsRouter = require('./routes/appareils');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/appareils', appareilsRouter);

const generateur = require('./Generateur');
generateur.demarrer();

module.exports = app;
