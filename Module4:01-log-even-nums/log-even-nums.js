// var logEvenNums = function(num) {
//     for (var i = 0; i <= num; i++){
//         if (i % 2 === 0) {
//             console.log(i);
//         }
//     }
// };

// var logEvenNums =function(num){
//     for (var i = 0; i <= num; i +=2) {
//         console.log(i);
//     }
// };

function logEvenNums(num) {
    // Iterate from 0 to num inclusive
    for (var i = 0; i <= num; i++) {
      // Check if the number is even
      if (i % 2 === 0) {
        // Log the even number
        console.log(i);
      }
    }
  }
  logEvenNums(6);
// Output:
// 0
// 2
// 4
// 6
