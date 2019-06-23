const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const routes = require("./routes");
const server = http.createServer(routes.handleRequest);

// define o encoding para leitura do buffer
process.stdin.setEncoding('utf8');

// monitora o evento readable
process.stdin.on('readable', function () {
    // lê o input de entrada
    var input = process.stdin.read();

    if (input !== null) {
        // echo the text
        process.stdout.write("input read is: " + input);

        var command = input.trim();
        if (command == 'pid')
            // sai do processo
            console.log(process.pid)

    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});