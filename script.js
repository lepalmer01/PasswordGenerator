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

    if (userChoice === "") {
      window.alert("Please specify how many characters you would like in your password to continue")
    }
    if (!userChoice) {
      return;
    }
    if (userChoice > 128) {
      window.alert("Character count must be less than 128");
    }
    if (userChoice < 8) {
      window.alert("Character count must be greater then 8")
    }
    else if (isNaN(userChoice)) {
      window.alert("Character count must be a number")
    }
  }

  var lowerCasechoice = window.confirm("Would you like lowercase letters in your password?")
  if (lowerCasechoice) {
    choicesArray = choicesArray.concat(lowerCase)
  }

  var upperCasechoice = window.confirm("Would you like uppercase letters in your password?")
  if (upperCasechoice) {
    choicesArray = choicesArray.concat(upperCase)
  }

  var specialCharschoice = window.confirm("Would you like special characters in your password?")
  if (specialCharschoice) {
    choicesArray = choicesArray.concat(specialChars)
  }

  var numberschoice = window.confirm("Would you like numbers in your password?")
  if (numberschoice) {
    choicesArray = choicesArray.concat(numbers)
  }

  if (!upperCasechoice && !lowerCasechoice && !specialCharschoice && !numberschoice) {
    window.alert("Please choose at least one type of character in order to generate a password")
    window.location.reload()
  }

  var result = ""
  for (let i = 0; i < userChoice; i++) {
    result += choicesArray[Math.floor(Math.random() * choicesArray.length)]
  }

  return result

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
