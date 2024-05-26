// arithmetic.js

// `add` function သည် `num1` နှင့် `num2` ကို ပေါင်းပြီး ရလဒ်ကို return ပြန်ပေးသည်။
function add(num1, num2) {
    return num1 + num2;
  }
  
  // `subtract` function သည် `num1` မှ `num2` ကို နုတ်ပြီး ရလဒ်ကို return ပြန်ပေးသည်။
  function subtract(num1, num2) {
    return num1 - num2;
  }
  
  // `multiply` function သည် `num1` နှင့် `num2` ကို မျှော်ပေါင်းပြီး ရလဒ်ကို return ပြန်ပေးသည်။
  function multiply(num1, num2) {
    return num1 * num2;
  }
  
  // `divide` function သည် `num1` ကို `num2` ဖြင့် မျှော်ပေါင်းပြီး ရလဒ်ကို return ပြန်ပေးသည်။
  function divide(num1, num2) {
    // Division by zero ကို handle လုပ်ပါ
    if (num2 === 0) {
      return "Error: Division by zero";
    }
    return num1 / num2;
  }
  

  console.log('Testing arithmetic functions...');

  // Test cases
  console.log(add(2, 3)); // 5
  console.log(subtract(5, 2)); // 3
  console.log(multiply(4, 3)); // 12
  console.log(divide(10, 2)); // 5
  console.log(divide(10, 0)); // Error: Division by zero

  console.log('Arithmetic functions tested.');