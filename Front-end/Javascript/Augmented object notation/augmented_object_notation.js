let name = "John"; // Declaring a variable name
let age = 32; // Declaring a variable age
const idProperty = "id"; // Declaring a constant idProperty

let person = { // Declaring an object person
    name, // Assigning the value of the variable name to the property name of the object person
    age, // Assigning the value of the variable age to the property age of the object person
    [idProperty]: "0-0000-0000-0000", // Assigning the value of the constant idProperty to the property id of the object person
};

console.log(person); // { name: 'John', age: 32, id: '0-0000-0000-0000' }
console.log(person.id); // 0-0000-0000-0000
console.log(person[idProperty]); // 0-0000-0000-0000
