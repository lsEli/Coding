let normalFunction = function (a, b) { return a + b; }; //Declaring a normal function
let arrowFunctionA = (a, b) => a + b; //Declaring an arrow function
let arrowFunctionB = (a, b) => { return a + b; }; //Declaring an arrow function

console.log(normalFunction(1, 2)); // 3
console.log(arrowFunctionA(1, 2)); // 3
console.log(arrowFunctionB(1, 2)); // 3