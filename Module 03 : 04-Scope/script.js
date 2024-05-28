// var shout = "Shout";

// function justShout() {
//   console.log(shout + ', ' + shout);
//   return;
// }

// function shoutItAllOut() {
//   console.log(shout + ' it all out! ');
//   return;
// }

// justShout();
// shoutItAllOut();



// function sayLions() {
//     var animal = 'Lions';
//     console.log(animal);
//     return;
//     }
    
//     function sayTigers() {
//     var animal = "Tigers";
//     console.log('and ' + animal + ' and ');
//     return;
//     }
    
//     sayTigers();

var globalVar = "I'm a global variable";

function logMessages() {
  console.log(globalVar); // This should work because globalVar is in the global scope.

  console.log(localVar); // This will cause an error because localVar is not defined in this scope.

  var localVar = "I'm a local variable"; // localVar is defined here.
}

logMessages();

// Global variable
var globalMessage = "This is a global message";

function logGlobalMessage() {
  console.log(globalMessage); // Accessing global variable
}

function logLocalMessage() {
  var localMessage = "This is a local message";
  console.log(localMessage); // Accessing local variable
}

function logBothMessages() {
  var anotherLocalMessage = "This is another local message";
  console.log(globalMessage); // Accessing global variable
  console.log(anotherLocalMessage); // Accessing local variable
}

logGlobalMessage(); // Logs: "This is a global message"
logLocalMessage(); // Logs: "This is a local message"
logBothMessages(); // Logs: "This is a global message" and "This is another local message"

var outerVar = "I'm outside!";

function outerFunction() {
  var innerVar = "I'm inside!";

  function innerFunction() {
    console.log(outerVar); // Can access outerVar due to lexical scope
    console.log(innerVar); // Can access innerVar because it is within its lexical scope
  }

  innerFunction();
}

outerFunction();
