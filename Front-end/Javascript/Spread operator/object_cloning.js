let person = {  // Declaring an object person
    name: 'John', // Declaring a property name with value John
    age: 20, // Declaring a property age with value 20
};

let clone = { ...person }; // Declaring a new object clone that contains the properties of person

console.log(clone); // { name: 'John', age: 20 }