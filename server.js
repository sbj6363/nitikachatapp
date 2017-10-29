/**
 * Created by iamabjain on 14/7/17.
 */
var express=require("express");
var app=express();
var http = require("http");
var server=http.Server(app);

var socket=require("socket.io");

var io=socket(server);
var arr=[];
app.use('/',express.static('public_static'));

io.on('connection',function(socket){
    console.log(socket.id);
    console.log("Connection is established");
    socket.emit("getPrev",arr);
    socket.on("rec_message",function(data){
        console.log(data);
        arr.push(data);
        io.emit("get" , data);
    })
});

server.listen(5000, function(){
    console.log("Server is listening on port 5000");
});
