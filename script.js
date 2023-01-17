// varibales 

var CharLength = 8;
//array that will store all possible symbols and letters to use when password is generated 
var selectArray = [];


var numbersArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChar = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '{', '}', '[', ']', '|', '/', ';', ':', '<', '>', '?', '.'];
var upperCaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Call the generate password button to work
function generatePassword() {

}
