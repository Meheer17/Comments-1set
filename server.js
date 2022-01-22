    'use strict';
require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
require('./db');
const routes = require('./routes');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.route('/').get((req, res) => {
  res.sendFile(process.cwd() + '/views/index.html')
});

app.route('/comments').get((req, res) => {
    res.sendFile(process.cwd() + '/views/comment.html')
});

routes(app)

app.use(function(req, res, next) {
  res.status(404)
    .type('text')
    .send('Not Found');
});

app.listen(3000, () => {
  console.log('server started')
});