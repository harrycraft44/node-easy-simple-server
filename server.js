var http = require('http');
var server = http.createServer();

server.on('request', function (request, response) {
    console.log('request event');
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello World\n');
});

server.listen(3000, function () {
    console.log('listening event');
});

console.log('Server running on port 3000');