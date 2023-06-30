let httpModule = require("http"); // Importing the module http

httpModule.createServer((request, response) => { // Creating a server
    response.writeHead(200, { 'Content-Type': 'text/plain' }); // Writing the response header
    response.write('Hello World'); // Writing the response body
    response.end(); // Ending the response
}).listen(7777); // Listening to the port 7777