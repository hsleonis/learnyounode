var fs = require('fs');
var str = fs.readFile(process.argv[2],'utf8',function(err,data){
    var len = data.split("\n").length;
    console.log(len-1); 
});