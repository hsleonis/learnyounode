var net = require('net');
var strftime = require('strftime');
var port = Number(process.argv[2]);

var server = net.createServer(function(socket){
    var data = strftime('%Y-%m-%d %H:%M');
    socket.write(data);
    socket.end(); // socket.end(data);
});
server.listen(port);

/*
    var net = require('net');
    
    function zeroFill(i) {
      return (i < 10 ? '0' : '') + i
    }
    
    function now () {
      var d = new Date();
      return d.getFullYear() + '-'
        + zeroFill(d.getMonth() + 1) + '-'
        + zeroFill(d.getDate()) + ' '
        + zeroFill(d.getHours()) + ':'
        + zeroFill(d.getMinutes())
    }
    
    var server = net.createServer(function (socket) {
      socket.end(now() + '\n')
    })
    
    server.listen(Number(process.argv[2]))
*/