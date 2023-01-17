// varibales 

var CharLength = 8;
//array that will store all possible symbols and letters to use when password is generated 
var selectArray = [];


var numbersArray = [];
var specialChar = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '{', '}', '[', ']', '|', '/', '\', ';', ':', '<', '>', '?', '.', ',', ''' ];
var upperCaseArray = [];
var lowerCaseArray = [];



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
