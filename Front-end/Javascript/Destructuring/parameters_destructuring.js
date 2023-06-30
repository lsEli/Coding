let person = {  // Declaring an object person
    name: "John", // Assigning the value of the string "John" to the property name of the object person
    age: 32, // Assigning the value of the number 32 to the property age of the object person
    id: "0-0000-0000-0000", // Assigning the value of the string "0-0000-0000-0000" to the property id of the object person
};

let printPersonName = (person) => { // Declaring a function printPersonName that takes an object person as a parameter
    console.log(person.name); // John
};

let printDestructuredPersonName = ({ name }) => { // Declaring a function printPersonName that destructures the object person
    console.log(name); // John
};

printPersonName(person); // John
printDestructuredPersonName(person); // John