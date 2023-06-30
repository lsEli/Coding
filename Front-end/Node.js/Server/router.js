function route(pathname, handler, response) { // Function for routing
    console.log(`Routing for ${pathname}`);

    if (typeof handler[pathname] === 'function') { // If the pathname is a function
        handler[pathname](response); // Call the function
    }
    else {
        console.log(`No handler for ${pathname}`); // Logging that there is no handler for the pathname
        response.writeHead(404, { // Writing the response header
            "Content-Type": "application/json" // Setting the content type
        });
    
        const data = {
            message: "404 Not Found" // Setting the response body
        }
    
        response.write(JSON.stringify({ // Writing the response body
            data
        }));
        response.end(); // Ending the response
    }
}

module.exports = {
    route: route // Exporting the route function
}