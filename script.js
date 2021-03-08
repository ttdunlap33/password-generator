// identifying the generate button with its id
var generateBtn = document.querySelector("#generate");

// generates a password based on all the criteria the user inputs
function generatePassword() {
  var length = prompt("How many characters do you want your password to be? Enter between 8-128.");



  if (length < 8 || length > 128) {
    alert("Password length must be between 8-128 characters.");
    return;
  }

  var upper = confirm("Would you like your password to include uppercase characters?");
  var lower = confirm("Would you like your password to include lowercase characters?");
  var special = confirm("Would you like your password to include special characters?");
  var numbers = confirm("Would you like your password to include numbers?");

  if (upper === false && lower === false && special === false && numbers === false) {
    alert("One of the four character types must be selected");
    return;
  }

  var passwordText = document.querySelector("#password");

  var i;
  var options = [];


//setting variables for all character types used
  if (upper === true) {
    var upperArray = [];
// turning charcodes into strings and pushing them into an array
    for (i = 65; i <= 90; i++) {
      upperArray.push(String.fromCharCode(i));
    }
    // combinging arrays 
    options = options.concat(upperArray);

  } if (lower === true) {
    var lowerArray = [];

    for (i = 97; i <= 122; i++) {
      lowerArray.push(String.fromCharCode(i));
    }
    options = options.concat(lowerArray);
  }
  var passsword = "";

  if (special === true) {
    var specialString = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";


    options = options.concat(specialString.split(""));
  }

  if (numbers === true) {
    var numberArray = [];
    for (i = 0; i <= 9; i++) {
      numberArray.push(i)
    } options = options.concat(numberArray);
  }


// randomly selecting charcters from the arrays and rounding all numbers

  for (i = 0; i < length; i++) {
    var index = Math.floor(Math.random() * options.length);
    var computerChoice = options[index];
    passsword = passsword + computerChoice;
  }

  passwordText.value = passsword;

}