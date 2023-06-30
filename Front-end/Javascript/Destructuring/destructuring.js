let person = {  // Declaring an object person
    name: "John", // Assigning the value of the string "John" to the property name of the object person
    age: 32, // Assigning the value of the number 32 to the property age of the object person
    id: "0-0000-0000-0000", // Assigning the value of the string "0-0000-0000-0000" to the property id of the object person
};

const { name, age, id } = person; // Destructuring the object person

console.log(name); // John
console.log(age); // 32
console.log(id); // 0-0000-0000-0000