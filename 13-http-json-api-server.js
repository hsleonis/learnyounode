var http = require('http');
var urlmodule = require('url');
var port = Number(process.argv[2]);

var server = http.createServer(function(req,res){
    if(req.method==='GET'){
        res.writeHead(200, { 'Content-Type': 'application/json' });
        
        var url = urlmodule.parse(req.url, true);
        if(url.pathname==='/api/parsetime') {
            var query = url.query.iso;
            var dt = new Date(query);
            var jsonObj = {};
            jsonObj.hour = dt.getHours();
            jsonObj.minute = dt.getMinutes();
            jsonObj.second = dt.getSeconds();
            res.write(JSON.stringify(jsonObj));
            res.end();
        }
        else if(url.pathname==='/api/unixtime') {
            var query = url.query.iso;
            var dt = new Date(query);
            var jsonObj = {};
            jsonObj.unixtime = dt.getTime();;
            res.write(JSON.stringify(jsonObj));
            res.end();
        }
    }
});
server.listen(port);

/*
// Official Solution

var http = require('http')
    var url = require('url')
    
    function parsetime (time) {
      return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      }
    }
    
    function unixtime (time) {
      return { unixtime : time.getTime() }
    }
    
    var server = http.createServer(function (req, res) {
      var parsedUrl = url.parse(req.url, true)
      var time = new Date(parsedUrl.query.iso)
      var result
    
      if (/^\/api\/parsetime/.test(req.url))
        result = parsetime(time)
      else if (/^\/api\/unixtime/.test(req.url))
        result = unixtime(time)
    
      if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
      } else {
        res.writeHead(404)
        res.end()
      }
    })
    server.listen(Number(process.argv[2]))
*/