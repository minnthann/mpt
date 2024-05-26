var generateBtn = document.querySelector (
    "#generate");

function writePassword () {
    var password = generatedPassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}
generateBtn.addEventListener ("click",writePassword);

function generatedPassword() {
        const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
        const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numbers = "0123456789";
        const specialChars = "!@#$%^&*()_+-=[]{}/?.,<>";
        let allChars = "";
        
        if (document.getElementById("lowercaseCheckbox"). checked){
            allChars += lowercaseChars;
        }
        if (document.getElementById("uppercaseCheckbox"). checked){
            allChars += uppercaseChars;
        }
        if (document.getElementById("numberCheckbox"). checked){
            allChars += numberCheckbox;
        }
        if (document.getElementById("specialCheckbox"). checked){
            allChars += specialChars;
        }
        
        if (allChars === ""){
            alert ("Please select at least one character type.");
        };
        let passwordLength = parseInt(
            document.getElementById("passwordLength").value
        );
        if (passwordLength < 8 || passwordLength > 120) {
            alert ("Password length must be between 8  and 120 characters.");
            return "";
        }
        let password = "";

        if (document.getElementById("lowercaseCheckbox").checked){
            const lowercaseChar = lowercaseChars . charAt(Math.floor(Math.random()* lowercaseChars.length)
            );
        password += lowercaseChar;
        }
        if (document.getElementById("uppercaseCheckbox").checked){
            const uppercaseChar = uppercaseChars . charAt(Math.floor(Math.random()* lowercaseChars.length)
        );
        password += uppercaseChar;
        }
        if (document.getElementById("numberCheckbox").checked){
            const numberChar = numbers. charAt(Math.floor(Math.random()* numbers.length)
        );
        password += numberChar;
        }
        if (document.getElementById("specialCheckbox").checked){
            const specialChar = specialChars . charAt(Math.floor(Math.random()* specialChars.length)
        );
        password += specialChar;
        }
        // console.log
        // (allChars)
        //console.log(password);
    

        while (password.length < passwordLength){
            const randomChar = allChars.charAt (
                Math.floor(Math.random()* allChars.length)
            );
            password += randomChar;
        }
        password = password
        .split ("")
        .sort (function (){
            return 0.5 - Math.random
        })
        .join("");
        return password;
    }
    document
    .getElementById ("generate")
    .addEventListener ("click", function (){
        const passwordInput = document.getElementById("password");
        const teneratedPassword = generatedPassword();
        passwordInput.value = teneratedPassword;
    })