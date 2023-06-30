let getArray = () => { // Declaring a function getArray
    return [1, 2, 3, 4, 5]; // Returning an array
};

const [, second,, fourth,] = getArray(); // Destructuring the array returned by the function getArray

console.log(second); // 2
console.log(fourth); // 4