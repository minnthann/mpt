var passwordBtnEl = $('#password-btn');
var passworDisplayEl =$('#password-dispaly');
var passwordDisplayEl = ('#password-display');
function generatePasswordCharacter() {
    return String.fromCharCode(Math.floor (Math.random()* 77) + 34);
}

function passwordGenerator(num) {
    var password = '';
    for (var i = 0; i < num; i++) {
        password += getPasswordCharacter();
    }
    return password;
}
passwordBtnEl.on('click', function (){
    var newPassword = passwordGenerator(15);
    passworDisplayEl.text(newPassword);
});

// document.addEventListener('DOMContentLoaded', () => {
//     const generateButton = document.getElementById('generate');
//     const passwordField = document.getElementById('password');

//     generateButton.addEventListener('click', () => {
//         const password = generatePassword(15); // Generate a 15-character password
//         passwordField.value = password;
//     });
// });

// function generatePassword(length) {
//     const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//     let password = "";
//     for (let i = 0; i < length; i++) {
//         const randomIndex = Math.floor(Math.random() * charset.length);
//         password += charset[randomIndex];
//     }
//     return password;
// }

// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.getElementById('sign-up-form');

//     form.addEventListener('submit', (event) => {
//         event.preventDefault(); // Prevent the form from submitting the traditional way

//         // Get the form data
//         const username = document.getElementById('username').value;
//         const email = document.getElementById('email').value;

//         // Create an object to store the data
//         const formData = {
//             username: username,
//             email: email
//         };

//         // Convert the object to a JSON string
//         const formDataString = JSON.stringify(formData);

//         // Store the JSON string in localStorage
//         localStorage.setItem('signUpData', formDataString);

//         // Optionally, display a confirmation message or reset the form
//         alert('Form data saved!');
//         form.reset();
//     });
// });
