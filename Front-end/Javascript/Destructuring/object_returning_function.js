let getPerson = () => { // Declaring a function getPerson
    return { // Returning an object
        name: "John", // Assigning the value of the string "John" to the property name of the object
        age: 32, // Assigning the value of the number 32 to the property age of the object
        id: "0-0000-0000-0000", // Assigning the value of the string "0-0000-0000-0000" to the property id of the object
    };
};

const { name, age, id } = getPerson(); // Destructuring the object returned by the function getPerson

console.log(name); // John
console.log(age); // 32
console.log(id); // 0-0000-0000-0000