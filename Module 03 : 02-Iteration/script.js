// 1. နာမည် ၅ခုကို students ဆိုသည့် variable ထဲတွင် သိမ်းထားပါ။
// const students = ["Alice", "Bob", "Charlie", "Diana", "Ethan"];

// 2. students array ထဲရှိ element များ၏ စုစုပေါင်း အရေအတွက်ကို console တွင် ပြပါ။
// console.log("Total number of students:", students.length);

// 3. for loop ကို အသုံးပြုပြီး students array ထဲရှိ အမည်တိုင်းကို greet ပြုလုပ်ပါ။
// for (let i = 0; i < students.length; i++) {
    // console.log(`Great to see you, ${students[i]}!`);
// }

function evaluateEquality(value1, value2) {
    if (value1 === value2) {
      console.log("They are equal in type and value");
    } else if (value1 == value2) {
      console.log("They are equal in value");
    } else {
      console.log("The values are not equal");
    }
  }
  
  // Example usage:
  evaluateEquality(5, 5);            // Output: "They are equal in type and value"
  evaluateEquality(5, '5');          // Output: "They are equal in value"
  evaluateEquality(5, 10);           // Output: "The values are not equal"
  evaluateEquality('hello', 'hello'); // Output: "They are equal in type and value"
  evaluateEquality('hello', 'world'); // Output: "The values are not equal"
  evaluateEquality(true, 1);          // Output: "They are equal in value"
  evaluateEquality(false, 0);         // Output: "They are equal in value"
  evaluateEquality(null, undefined);  // Output: "They are equal in value"
  

  console.log(myVar); // Output: undefined
var myVar = 5;
console.log(myVar); // Output: 5

myFunction(); // Output: "Hello, world!"
function myFunction() {
  console.log("Hello, world!");
}
