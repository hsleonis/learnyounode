var http = require('http');
var bl = require('bl');
var urlLength = process.argv.length;

var nextUrl = function(urlLength,i){
    if(urlLength>i){
        var url = process.argv[i];
        var msg = '';
        http.get(url,function(response){
            response.setEncoding('utf8');

            response.pipe(bl(function(err,data){
                    if (err)
                    return console.error(err);
                    
                    msg=data.toString();
                })
            );

            response.on('end',function(){
                console.log(msg);
                nextUrl(urlLength,i+1);
            });

            response.on('error', console.error);

        });
    }
};

nextUrl(urlLength,2);

/*
var http = require('http');
    var bl = require('bl');
    var results = [];
    var count = 0;
    
    function printResults () {
      for (var i = 0; i < 3; i++)
        console.log(results[i]);
    }
    
    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err)
            return console.error(err)
    
          results[index] = data.toString();
          count++;
    
          if(count == 3)
            printResults();
        }))
      })
    }
    
    for (var i = 0; i < 3; i++)
      httpGet(i);
*/