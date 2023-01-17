// varibales 

var CharLength = 8;
//array that will store all possible symbols and letters to use when password is generated 
var selectArray = [];

// Possible characters to be used in password 
var numbersArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var symbolCharArray = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '{', '}', '[', ']', '|', '/', ';', ':', '<', '>', '?', '.'];
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

// Where all the information is obtained from in the password
function getPrompts(){
  // parseInt converts the string into the number you want 
  passwordLength = parseInt(prompt("How many characters do you want in your password? 8 - 128 characters avaliable" ));

  if (Number.isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      alert("Please provide a numerical value for your requested password length, 8 - 128 characters. Re-enter number." );
      return false; //check if anything went wrong
  }

  //Asking questions for what a person wants in thier password
  if (confirm("Do you want to use captial letters in your password?" )) {
    selectArray = selectArray.concat(upperCaseArray);
  }

  if (confirm("Do you want to use lower case letters in your password?" )) {
    selectArray = selectArray.concat(lowerCaseArray);
  }

  if (confirm("Do you want to use numbers in your password?" )) {
    selectArray = selectArray.concat(numbersArray);
  }

  if (confirm("Do you want to use special characters in your password?" )) {
    selectArray = selectArray.concat(symbolCharArray);
  }
  return true; //end of function

}


