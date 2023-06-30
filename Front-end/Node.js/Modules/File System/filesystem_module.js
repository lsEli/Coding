let fileSystemModule = require("fs"); // Importing the module file system

fileSystemModule.readFile("lorem.txt", (error, data) => { // Reading the file asynchronously
    (error) ? console.log(error) : console.log(data.toString()); // If an error occurred, write the error, else write the file content
});

let fileContent = fileSystemModule.readFileSync("lorem.txt"); // Reading the file synchronously
console.log(fileContent.toString()); // Printing the file content