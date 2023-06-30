class Rectangle { // Declaring a class called Rectangle
    constructor(height, width) { // Constructor method
        this.height = height; // Defining the height of the rectangle
        this.width = width; // Defining the width of the rectangle
    }
    get area() { // Getter method
        return this.calcArea(); // Calling the calcArea method
    }
    calcArea() { // Method to calculate the area of the rectangle
        return this.height * this.width; // Returning the area of the rectangle
    }
}

class Square extends Rectangle { // Declaring a class called Square that inherits from Rectangle
    constructor(side) { // Constructor method
        super(side, side); // Calling the constructor method of the parent class
    }
}

const RectangleObject = new Rectangle(5, 6); // Declaring a new Rectangle object with height 5 and width 6
console.log(RectangleObject.area); // 30

const SquareObject = new Square(5); // Declaring a new Square object with side 5
console.log(SquareObject.area); // 25