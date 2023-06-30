let server = require("./server"); // Importing the server module
let router = require("./router"); // Importing the router module
let requestHandler = require("./request_handler"); // Importing the requestHandlers module

let handler = {}; // Creating an empty object
handler["/home"] = requestHandler.home; // Adding a property to the object

server.startServer(router.route, handler); // Calling the createServer function