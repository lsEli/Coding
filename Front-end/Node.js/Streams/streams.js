let fileSystemModule = require("fs"); // Importing the module fs

let readableStream = fileSystemModule.createReadStream("lorem.txt"); // Creating a readable stream

let data = ""; // Declaring a variable to store the data

readableStream.setEncoding("UTF8"); // Setting the encoding of the readable stream
readableStream.on("data", (chunk) => { // Listening for the data event
    data += chunk; // Appending the data to the variable
});

readableStream.on("end", () => { // Listening for the end event
    console.log(data); // Logging the data
});

readableStream.on("error", (error) => { // Listening for the error event
    console.log(error.stack); // Logging the error
});

data = "Output data."; // Setting the data to be written
let writeableStream = fileSystemModule.createWriteStream("output.txt"); // Creating a writeable stream
writeableStream.write(data, "UTF8"); // Writing data to the stream
writeableStream.end(); // Ending the stream

writeableStream.on("finish", () => { // Listening for the finish event
    console.log("Write completed."); // Logging the message
});

writeableStream.on("error", (error) => { // Listening for the error event
    console.log(error.stack); // Logging the error
});