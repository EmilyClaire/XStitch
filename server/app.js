'use strict'

var path = require('path');

var http = require('http');
var server = http.createServer();

var express = require('express');
var app = express();

server.on('request', app);

app.use(express.static(path.join('/Users/emilyclaire/XStitch/', 'browser')));
app.use(express.static(path.join('/Users/emilyclaire/XStitch/', 'node_modules')));
app.use(express.static(path.join('/Users/emilyclaire/XStitch/', 'server')));

app.get('/', function (req, res) {
    res.sendFile(path.join('/Users/emilyclaire/XStitch/browser/', 'index.html'));
});


server.listen(2003, function () {
    console.log('The server is listening on port 1337!');
});
