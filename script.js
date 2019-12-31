//DON'T TOUCH THIS CODE! This code is adding click handlers and DOM manipulation to the page.  Edit the generatePassword function and all should work properly.
// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");
//this function will fire when you click the generate password button on the page.  I've set it to alert "You've clicked a button" and return a password of password for now. Update it to make your password

//YOUR CODE HERE
var char = 'abcdefghijklmnopqrstuvwxyz';
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var number = '0123456789';
var symbol = '!#$%&*+,-.:;<=>?@\^_`~';


var lowBox = document.getElementById("lower");
var amount = document.getElementById("amount");
var upBox = document.getElementById("upper");
var numBox = document.getElementById("number");
var symBox = document.getElementById("symbol");
var password = document.getElementById("password");

function generatePassword(l, characters) {

var pwd = ''

    for (var i = 0; i < l; i++) {
         pwd += characters.charAt(Math.floor(Math.random() * characters.length));  
    }
   if (amount.value < 8 || amount.value > 128){
           alert("Please choose between 8 and 128 characters!");
       
       }
   else{    
       return pwd;
   }
  

    // alert("ive been clicked");
    // return "password";
}

// Don't Touch
// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

    copyBtn.removeAttribute("disabled");
    copyBtn.focus();
}

// BONUS 
function copyToClipboard() {
  document.getElementById("password").select();

  document.execCommand("Copy");
  
  alert("Password copied!");
}

// BONUS EVENT LISTENER
// Add event listener to generate button
generateBtn.addEventListener("click", function (event) {
    var characters = char;
    (lowBox.checked) ? characters += char: '';
    (numBox.checked) ? characters += number: '';
    (symBox.checked) ? characters += symbol: '';
    (upBox.checked) ? characters += upper: '';

    if (lowBox.checked == true || numBox.checked == true || symBox.checked == true || upBox.checked == true) {

        (password.value = generatePassword(amount.value, characters));
    }
else {
    alert("Select character type!")
}

});

