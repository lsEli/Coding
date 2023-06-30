let fileSystemModule = require("fs"); // Importing the module file system

let readableStream = fileSystemModule.createReadStream("lorem.txt"); // Creating a readable stream
let writableStream = fileSystemModule.createWriteStream("output.txt"); // Creating a writable stream

readableStream.pipe(writableStream); // Piping the readable stream to the writable stream