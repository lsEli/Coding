const array = [1, 2, 3]; // Declaring an array

const [first, ...result] = array; // Declaring a new array result that contains the elements of array and the elements 4, 5, 6

console.log(first); // 1
console.log(result); // [2, 3]