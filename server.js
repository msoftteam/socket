var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

io.on('connection', function(socket) {
    console.log('connect from client.');
    socket.on('disconnect', function() {
        console.log('user disconnect');
    });

    socket.broadcast.emit('hi from server.');
});

app.get('/', function(req, res) {
    res.send('Hello World');
});

http.listen(3000, function() {
    console.log('server start at port 3000.');
});

