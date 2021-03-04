// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
 var length = prompt("How many chjaracters do you want your password to be? Please enter between 8-128 characters.");
 

  // var password = generatePassword();
  if (length < 8 || length > 128){
    alert("Password length must be between 8-128 characters.");
    return;
  }

var upper = confirm("Would you like to include uppercase characters?");
 var lower = confirm("Would you like to include lowercase characters?");
 var special = confirm("Would you like your password to include special characters?");
 var numbers = confirm("Would you like your password to include numbers?");

 if (upper === false && lower === false && special === false && numbers === false){
   alert("One of the four character types must be selected");
   return;
 }

  var passwordText = document.querySelector("#password");
  
var i;
var options = [];




// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);


