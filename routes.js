const url = require('url');
let fs = require('fs');
const https = require("https");
const API = "https://jsonplaceholder.typicode.com/posts/1";


function render(path, response) {
    fs.readFile(path, null, function (error, data) {
        if (error) {
            response.writeHead(404);
            respone.write('file not found');
        } else {
            response.write(data);
        }
        response.end();
    });
}


module.exports = {
    handleRequest(request, response) {
        response.writeHead(200, {
            'Content-Type': 'text/html'
        });

        let path = url.parse(request.url).pathname;

        switch (path) {
            case '/':
                render('./index.html', response);
                break;
            case '/about':
                render('./about.html', response);
                break;
            case '/api':
                let body = "";
                https.get(API, res => {
                    res.setEncoding("utf8");
                    res.on("data", data => {
                        body += data;
                    });
                    res.on("end", () => {
                        body = JSON.parse(body);
                        console.log(body);
                    });
                });
                render('./index.html', response)
                break;
            default:
                response.writeHead(404);
                response.write('Route not found');
                response.end();
        }
    }
}