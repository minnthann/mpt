function fizzBuzz(arr) {
    // Iterate through each number in the given array
    for (let i = 0; i < arr.length; i++) {
      // Get the current number
      let num = arr[i];
  
      // Check if the number is divisible by both 3 and 5
      if (num % 3 === 0 && num % 5 === 0) {
        console.log("Fizz Buzz");
      }
      // Check if the number is divisible by 3
      else if (num % 3 === 0) {
        console.log("Fizz");
      }
      // Check if the number is divisible by 5
      else if (num % 5 === 0) {
        console.log("Buzz");
      }
      // If none of the above, print the number itself
      else {
        console.log(num);
      }
    }
  }
  
  // Example usage:
  var arr = [13, 14, 15, 16, 17, 18, 19, 20];
  fizzBuzz(arr);
  


//   13
// 14
// Fizz Buzz
// 16
// 17
// Fizz
// 19
// Buzz
