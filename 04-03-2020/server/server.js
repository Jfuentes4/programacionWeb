var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    let html = fs.readFileSync('../../../PaginaFPS/index.htm');
    res.end(html);

}).listen(1337, '127.0.0.1');