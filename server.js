
var http = require('http');
var server = http.createServer(function(request, response){
    response.writeHead(200, {
        "Context-type" : "text/plain"
    });

    response.write('Hello Phong ka');
    response.end();
});

server.listen(9092, function(){
    console.log('Connected Successfull!');
});
