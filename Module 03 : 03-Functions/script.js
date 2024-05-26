// Equality စစ်ဆေးရန် function ကို သတ်မှတ်ပါ။
function evaluateEquality(value1, value2) {
    if (value1 === value2) {
        console.log("They are equal in type and value");
    } else if (value1 == value2) {
        console.log("They are equal in value");
    } else {
        console.log("The values are not equal");
    }
}

// Function ကို စမ်းသပ်ရန် နမူနာများ:
evaluateEquality(10, 10);           // They are equal in type and value
evaluateEquality(10, '10');         // They are equal in value
evaluateEquality(10, 20);           // The values are not equal
evaluateEquality('hello', 'hello'); // They are equal in type and value
evaluateEquality('10', '10');       // They are equal in type and value
evaluateEquality('10', 10);         // They are equal in value
evaluateEquality(true, 1);          // They are equal in value
evaluateEquality(true, true);       // They are equal in type and value
evaluateEquality(null, undefined);  // The values are not equal



console.log(hoistedVar); // Output: undefined
var hoistedVar = 'This variable has been hoisted';

hoistedFunction(); // Output: "This function has been hoisted"
function hoistedFunction() {
    console.log("This function has been hoisted");
}
