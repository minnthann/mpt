function vowelCount(str) {
    // Define a string containing all vowels
    const vowels = 'aeiouAEIOU';
  
    // Initialize a counter for vowels
    let count = 0;
  
    // Iterate through each character in the string
    for (let i = 0; i < str.length; i++) {
      // Check if the current character is a vowel
      if (vowels.indexOf(str[i]) !== -1) {
        count++;
      }
    }
  
    // Return the count of vowels
    return count;
  }
  
  // Example usage:
  console.log(vowelCount("Hello World")); // Should print 3
  console.log(vowelCount("A quick brown fox jumps over the lazy dog")); // Should print 11
  
//   11
//   3