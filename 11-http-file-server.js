var http = require('http');
var fs = require('fs');
var port = Number(process.argv[2]);
var file = process.argv[3];

var server = http.createServer(function(req,res){
    res.writeHead(200, { 'content-type': 'text/plain' });
    
    var stream = fs.createReadStream(file);
    stream.pipe(res);
});
server.listen(port);

/*
    var http = require('http');
    var fs = require('fs');
    
    var server = http.createServer(function (req, res) {
      res.writeHead(200, { 'content-type': 'text/plain' });
    
      fs.createReadStream(process.argv[3]).pipe(res);
    });
    
    server.listen(Number(process.argv[2]));

*/