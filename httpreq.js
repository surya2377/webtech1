var http = require('http');
var server = http.createServer(function (request, response) {

    if (request.url == '/') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write('<h1>Welcome to home page of my web application!</h1>');
        response.end();
    } else if (request.url == '/student') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write('<h1>Student</h1>');
        response.write('<p>Welcome to student page</p>');
        response.end();

    } else if (request.url == '/staff') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write('<h1>Staff</h1>');
        response.write('<p>Welcome to staff page</p>');
        response.end();
    } else {
        response.writeHead(404, { 'Content-Type': 'text/html' });
        response.write('<h1>Page not found</h1>');
        response.end();
    }

});

server.listen(3000);
console.log('Server running on port 3000');