function maxNum(arr) {
    // Initialize the maximum number to the first element in the array
    let max = arr[0];
  
    // Iterate through each number in the array
    for (let i = 1; i < arr.length; i++) {
      // If the current number is greater than max, update max
      if (arr[i] > max) {
        max = arr[i];
      }
    }
  
    // Return the largest number
    return max;
  }
  
  // Example usage:
  var arr = [3, 1, 17, 5, 6];
  console.log(maxNum(arr)); // Should print 17
  

//   17