// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
} 

var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = [
    '@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'
  ];
var lowerCasedCharacters = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ];
var upperCasedCharacters = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ];  

 /**
  * get the users pw, length and what characters make up the pw
  */ 
function generatePassword() {
  // what is the desired length of the new pw
  var pwLength = prompt("Please enter the length of your password: (between 8-128)");

  if(pwLength < 8 || pwLength > 128) {
    alert("choice is not vaild. Try again");
    return;
  }

  // does the pw contain uppercase letters
  var hasUpperCase = confirm("Do you want to include uppercase characters?");
  // does the pw contain lowercase letters
  var hasLowerCase = confirm("Do you want to include lower case characters?");
  // does it contain numbers
  var hasNumbers = confirm("Do you want to include numbers?");
  // does it contain special characters
  var hasSpecialCharacters = confirm("Do you want to include special characters?");


  // define a new string for the character pool
  var characterPool = [];

    //  if the user selected uppercase, add to pool
    if(hasUpperCase) {
      characterPool.concat(upperCasedCharacters)
    }
    //  if the user selected lowercase, add to pool
    if(hasLowerCase) {
      characterPool.concat(lowerCasedCharacters)
    }
    //  if the user selected numbers, add to pool
    if(hasNumbers) {
      characterPool.concat(numericCharacters)
    }
    //  if the user selected special characters, add to pool
    if(hasSpecialCharacters) {
      characterPool.concat(specialCharacters)
    }
    
    if(characterPool.length === 0) {
      alert("no choices were selected. try again");
    return;

    // define a new string to hold the new password
    var newPw = "";
  // iterate through the pool, pw length times, and index a random index from the pool

  // append each new character to the new pw string

  // return the generated password/ display it on the screen
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);