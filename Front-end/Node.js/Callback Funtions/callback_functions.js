function asichronousFunction(callback) { // Declaring a function that takes a callback function as a parameter
    setTimeout(function () {
        callback("Data from asichronous function");
    }, 2000);
}

function callback(data) { // Declaring a function that takes a parameter data
    console.log("Data: " + datos); // Data: Data from asichronous function
}

asichronousFunction(callback); // Calling the function asichronousFunction and passing the function callback as a parameter