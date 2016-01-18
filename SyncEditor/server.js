var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(https);

 
sachin tiwari
edewereweefe + '/public')); 

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

var str = "";
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
  	str = msg;
    socket.broadcast.emit('chat message', msg);
  });

  socket.on('page load',function(msg){
  	if(str != "")
  		msg = str;
  	io.emit('chat message',msg);
  });
  socket.on('cursor position',function(msg){
  	socket.broadcast.emit('cursor position',msg);
  });
});

http.listen(3000, function(){
  console.log('server listening on *:3000');
});
//fskjfflkjsf
