var http = require('http');
var port = process.env.PORT || 8080;        
var server = http.createServer(function(req, res) {
    res.writeHead(200);
    res.end('Hello Heroku This are the new changes by Vikas Sawant 5th May 9.52PM IST :-)!!!');
});
server.listen(port);
 
