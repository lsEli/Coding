const object = { // Declaring a constant object
    normalFunction: function() { // Declaring a normal function
        console.log(this); // {normalFunction: [Function: normalFunction], arrowFunction: [Function: arrowFunction]}
    },
    arrowFunction: () => { // Declaring an arrow function
        console.log(this); // {}
    }
};

console.log(this); // {}
object.normalFunction(); // {normalFunction: [Function: normalFunction], arrowFunction: [Function: arrowFunction]}
object.arrowFunction(); // {}