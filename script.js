// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialChars = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", " ' ", " ", ' " ', "\\"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var userChoice = 0
var choicesArray = []

function generatePassword() {
  console.log("clicked");
  while (userChoice < 8 || userChoice > 128 || isNaN(userChoice) || userChoice === "") {
    userChoice = window.prompt("How many characters would you like your password to contain?")
  }

  var lowerCasechoice = window.confirm("Would you like lowercase letters in your password?")
  if (lowerCasechoice) {
    choicesArray = choicesArray.concat(lowercase)
  }

  var upperCasechoice = window.confirm("Would you like uppercase letters in your password?")
  if (upperCasechoice) {
    choicesArray = choicesArray.concat(upperCase)
  }

  var specialCharschoice = window.confirm("Would you like special characters in your password?")
  if (specialCharschoice) {
    choicesArray = choicesArray.concat(specialChars)
  }
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
