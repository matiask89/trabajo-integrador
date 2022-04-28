const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();
const app = express();
const mongoose = require ("mongoose");
const config = require('config');
const mongoConnectionString = config.get('database.connectionString');
const Router = require ('./src/routes/stadiums')

mongoose.connect(mongoConnectionString,
{
    useNewUrlParser: true,
    useUnifiedTopology: true
}
).then(() => console.log('connected to MONGODB')).catch((err) => {throw(err)});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//complete with your resource
app.use('/stadiums', Router);

module.exports = app;
