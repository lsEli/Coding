const array = [1, 2, 3, 4, 5]; // Declaring an array

const [, second,, fourth,] = array; // Destructuring the array

console.log(second); // 2
console.log(fourth); // 4