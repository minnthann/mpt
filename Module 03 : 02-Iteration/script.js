// 1. နာမည် ၅ခုကို students ဆိုသည့် variable ထဲတွင် သိမ်းထားပါ။
const students = ["Alice", "Bob", "Charlie", "Diana", "Ethan"];

// 2. students array ထဲရှိ element များ၏ စုစုပေါင်း အရေအတွက်ကို console တွင် ပြပါ။
console.log("Total number of students:", students.length);

// 3. for loop ကို အသုံးပြုပြီး students array ထဲရှိ အမည်တိုင်းကို greet ပြုလုပ်ပါ။
for (let i = 0; i < students.length; i++) {
    console.log(`Great to see you, ${students[i]}!`);
}
