let person = {  // Declaring an object person
    name: 'John', // Declaring a property name with value John
    age: 20, // Declaring a property age with value 20
};

const { name, ...clone } = person; // Declaring a new object clone that contains the properties of person except the property name

console.log(name); // John
console.log(clone); // { age: 20 }