'use strict';

var express = require('express'),
  app = express(),
  server = require('http').createServer(app),
  port = process.env.PORT || 3000,
  bodyParser = require('body-parser');

app.use(express.static('static'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// var routes = require('./routes/ggr2-delivery-routes');
// routes(app);

server.listen(port);

console.log('MyTask Server started on: ' + port);