var http = require('http');
var app = require('./app');


var server = http.createServer(app);

server.listen(4000,function(err,resp){
    if(err){
        console.log(err);
    }
    console.log("Server has started")   
});