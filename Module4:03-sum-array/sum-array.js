// var sumArray = function(arr) {
//     var result = 0;

//     for (var i= 0; i <arr.length; i++){
//         var currentNumber = arr[i];
//         result += currentNumber;
//     }
//     return result;
// };

function sumArray(arr) {
    // Initialize sum to 0
    let total = 0;
    
    // Iterate over each element in the array
    for (let i = 0; i < arr.length; i++) {
      // Add the current element to the sum
      total += arr[i];
    }
    
    // Return the total sum
    return total;
  }
  
  var arr = [3, 1, 5, 6];
console.log(sumArray(arr)); // Output will be 15
