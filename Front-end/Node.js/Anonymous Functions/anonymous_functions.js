let consoleLog = function (message) { // Declaring an anonymous function
    console.log(message); // Prints message to the console
}

function executeConsoleLog(consoleLog, message) { // Declaring a function that takes a function as a parameter
    consoleLog(message); // Executes the function passed as a parameter
}

consoleLog("Hello World"); // Prints Hello World to the console
executeConsoleLog(function (message) { console.log(message) }, "Hello World"); // Passing an anonymous function as a parameter