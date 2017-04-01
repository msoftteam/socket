var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

io.on('connection', function(socket) {
    console.log('connect from client.');
    socket.on('disconnect', function() {
        console.log('user disconnect');
    })
});

http.listen(3000, function() {
    console.log('server start at port 3000.');
});

