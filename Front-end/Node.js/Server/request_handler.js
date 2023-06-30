function home(response) { // Handler for home page
    console.log("Executing 'home' handler");
    console.log("Request handler 'home' was called.");
}

module.exports = {
    home: home // Export the home function
}