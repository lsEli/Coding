let eventModule = require("events"); // Importing the module events
let eventEmitter = new eventModule.EventEmitter(); // Creating an event emitter

eventEmitter.on("eventName", (eventArguments) => { // Listening for the event
    console.log(eventArguments); // Logging the event arguments
});

eventEmitter.emit("eventName", "Event arguments"); // Triggering the event