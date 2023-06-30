let httpModule = require("http"); // Importing the module http
let url = require("url"); // Importing the module url

function startServer(route, handler) { // Declaring a function to start the server
    httpModule.createServer((request, response) => { // Creating a server
        let pathname = url.parse(request.url).pathname; // Getting the path name
    
        console.log(`Request for ${pathname} received.`); // Logging the request

        route(pathname, handler, response); // Calling the route function
    }).listen(7777); // Listening on port 7777

    console.log("Server has started."); // Logging that the server has started
}

module.exports = {
    startServer: startServer // Exporting the startServer function
}