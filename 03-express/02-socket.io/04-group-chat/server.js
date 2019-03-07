const express = require("express");
var session = require('express-session');
var app = express();
const path = require("path");
const bodyParser = require('body-parser');
const server = app.listen(8000, function() {
console.log("listening on port 8000");
const io = require('socket.io')(server);
 
var names = []
var msgs = []

io.on('connection', function (socket) {
  socket.emit('chats' , {chats:msgs})
  socket.on('name', function(name) {
  var dup = false;
  console.log(name.name);
  
if(dup != true){
  names.push(name.name)
  console.log(names);}
})
  socket.on('text', function(text){
    msgs.push(text.msg)
    io.emit('msg',{msg:text.msg, person:text.person})
  })
  io.onconnection
})
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
require("./server/config/routes")(app);