// Define an object named 'car'
const car = {
  // The 'brand' property of the 'car' object
  brand: "Toyota",

  // The 'model' property of the 'car' object
  model: "Camry",

  // The 'year' property of the 'car' object
  year: 2021,

  // Method to display the car's information
  displayInfo: function() {
    // 'this' refers to the 'car' object within this method
    console.log(`Car: ${this.brand} ${this.model} (${this.year})`);
  }
};

// Call the 'displayInfo' method on the 'car' object
car.displayInfo(); // Output: "Car: Toyota Camry (2021)"

// Define a constructor function named 'Person'
function Person(name, age) {
  // The 'name' property is set to the 'name' parameter
  this.name = name;

  // The 'age' property is set to the 'age' parameter
  this.age = age;

  // Method to display the person's information
  this.displayInfo = function() {
    // 'this' refers to the specific instance of 'Person'
    console.log(`Person: ${this.name}, Age: ${this.age}`);
  };
}

// Create a new instance of 'Person'
const person1 = new Person("Alice", 30);

// Call the 'displayInfo' method on the 'person1' instance
person1.displayInfo(); // Output: "Person: Alice, Age: 30"

// Define a global variable
var globalName = "Global";

// Function to demonstrate 'this' in global context
function showGlobalThis() {
  // 'this' refers to the global object (window in browsers)
  console.log(this.globalName); // Output: "Global"
}

// Call the function
showGlobalThis();

// In a browser
console.log(window); // Logs the window object

// In Node.js
// console.log(global); // Logs the global object




// TODO: What is `this` referring to here?
// console.log(this);

// TODO: What is `this` referring to here?
// ANS: this refer to window(browser)
// function helloThis() {
//   console.log('Inside this function, this is ' + this);
// }

// TODO: What is `this` referring to here? What will be logged in the console?
// ans:this refer to child Object
// var child = {
//   age: 10,
//   ageTenYears: function() {
//     console.log(this.age + 10);
//   }
// };

// TODO: What is `this` referring to here?
// console.log(this);

// TODO: What is `this` referring to here?
// ANS: this refer to window(browser)
// function helloThis() {
//   console.log('Inside this function, this is ' + this);
// }

// TODO: What is `this` referring to here? What will be logged in the console?
// ans:this refer to child Object
// var child = {
//   age: 10,
//   ageTenYears: function() {
//     console.log(this.age + 10);
//   }
// };

