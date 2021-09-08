// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
} 

  //characters to be included in new password
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var specialCharacters = [
    '@', '%', '+', '/', '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
  var lowerCasedCharacters = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var upperCasedCharacters = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];  

  //select a random character from array
function randomSelect(array) {
  var randomI = Math.floor(Math.random() * array.length)
  var randomE = array[randomI]
  return randomE;
}
 /**
  * get the users pw, length and what characters make up the pw
  */ 
function generatePassword() {
  // what is the desired length of the new pw
  var pwLength = prompt("Please enter the length of your password: (between 8-128)");

  console.log(pwLength);
  
  //if password length not 8 - 128 then alert error
  if (pwLength < 8 || pwLength > 128 || isNaN(pwLength)) {
    alert("choice is not vaild. Try again");
    return;
  }

  // does it contain uppercase letters
  var hasUpperCase = confirm("Do you want to include uppercase characters?");
  // does it contain lowercase letters
  var hasLowerCase = confirm("Do you want to include lower case characters?");
  // does it contain numbers
  var hasNumbers = confirm("Do you want to include numbers?");
  // does it contain special characters
  var hasSpecialCharacters = confirm("Do you want to include special characters?");

  // define a new string for the character pool
  var characterPool = [];
 
    //  if the user selected uppercase, add to pool
    if(hasUpperCase === true) {
      characterPool = characterPool.concat(upperCasedCharacters);
    }
    //  if the user selected lowercase, add to pool
    if(hasLowerCase === true) {
      characterPool = characterPool.concat(lowerCasedCharacters);
    }
    //  if the user selected numbers, add to pool
    if(hasNumbers === true) {
      characterPool = characterPool.concat(numericCharacters);
    }
    //  if the user selected special characters, add to pool
    if(hasSpecialCharacters === true) {
      characterPool = characterPool.concat(specialCharacters);
    }
    //if no characters are selected then alret error
    if (hasUpperCase === false && hasLowerCase === false && hasNumbers === false && hasSpecialCharacters === false) {
      alert("No selections were made. try again");
      return;
    }

    //define  a new string to hold new password
    var newPassword = [];

    // iterate through the pool, pw length times, and random index from the pool
    for (var i = 0; i < pwLength; i++) {
      var myChar = randomSelect(characterPool);
      newPassword.push(myChar)
    }
    // return the generated password/ display it on the screen
    return newPassword.join('')
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);