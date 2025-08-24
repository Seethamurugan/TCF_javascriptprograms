// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;

    // Method inside constructor
    this.greet = function() {
        console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
    }
}

// Create objects using the constructor
const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);

// Call the method
person1.greet(); // Hello, my name is Alice and I am 25 years old.
person2.greet(); // Hello, my name is Bob and I am 30 years old.
