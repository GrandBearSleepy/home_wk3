// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// GeneratePassword 

function generatePassword() {

  // Four arrarys number, lowercase, uppercase and special symbol
  var numericArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var specialArray = ["!", "@", "#", "$", "%", "^", "&", "*", ".", "?"];

  // Let user input generated password length

  var passWordLength = prompt("Please enter valid password length between 8 and 128");

  //Input validation
  while (true) {
    if (passWordLength < 8 || passWordLength > 128 || passWordLength === null) {
      alert("Please enter valid number between 8 and 128");
      passWordLength = 0;
      passWordLength = prompt("Please enter valid password length between 8 and 128");
    }
    else break;
  }
  alert("Your password length is: " + passWordLength);

  // Let user input criteria letter
  var criteriaLetter = prompt("Please input ONE criteria character:");

  // User input validation
  while (true) {
    //User click cancle
    if (criteriaLetter === null) {
      alert("You chose nothing!");
      break;
    }
    else if (criteriaLetter.trim() == "" || criteriaLetter.trim().length != 1) {
      alert("Error input! Try again.");
      criteriaLetter = "";
      criteriaLetter = prompt("Please input ONE criteria character:");
    }
    else {
      alert("Your chose " + criteriaLetter + " for criteria character.");
      break;
    }
  }

  //Let user confirm if include numeric
  var includeNumeric = confirm("Would you like include some numeric?")
  if (includeNumeric == true) {
    alert("You want number in your password");
  }
  else {
    alert("You don't want number in your password");
  }

  //Let user confirm if include lowercase character
  var includeLowerCase = confirm("Would you like include some lowercase character?");
  if (includeLowerCase == true) {
    alert("You want lowercase character in your password");
  }
  else {
    alert("You don't want lowercase character in your password");
  }

  //Let user confirm if include uppercase character
  var includeUpperCase = confirm("Would you like include some uppercase character?");
  if (includeUpperCase == true) {
    alert("You want uppercase character in your password");
  }
  else {
    alert("You don't want uppercase character in your password");
  }

  //Let user confirm if include special character
  var includeSpecial = confirm("Would you like include some special character?");
  if (includeSpecial == true) {
    alert("You want special character in your password");
  }
  else {
    alert("You don't want special character in your password");
  }

  // Get a random character from a array
  function getRandomCharacter(arr) {
    var arrLen = arr.length;
    var randomIndex = Math.floor(Math.random() * arrLen);
    return arr[randomIndex];
  }

  //A string for store at least one user indecated character
  var createdPassword = "";
  //An array for store combined all user indecated characters
  var selectedPasswordPool = [];

  //If user input a criteria letter, generate a criteria letter, add in createdPassword.
  if (criteriaLetter !== null) {
    createdPassword += criteriaLetter;
    selectedPasswordPool.push(criteriaLetter);
  }

  //If user confirm include numeric character, generate one numeric character, add in createdPassword.
  if (includeNumeric == true) {
    createdPassword += getRandomCharacter(numericArray);
    selectedPasswordPool = selectedPasswordPool.concat(numericArray);
  }

  //If user confirm include lowercase character, generate one lowercase character, add in createdPassword.
  if (includeLowerCase == true) {
    createdPassword += getRandomCharacter(lowerCaseArray);
    selectedPasswordPool = selectedPasswordPool.concat(lowerCaseArray);
  }

  //If user confirm include uppercase character, generate one uppercase character, add in createdPassword.
  if (includeUpperCase == true) {
    createdPassword += getRandomCharacter(upperCaseArray);
    selectedPasswordPool = selectedPasswordPool.concat(upperCaseArray);
  }

  //If user confirm include special character, generate one specail character, add in createdPassword.
  if (includeSpecial == true) {
    createdPassword += getRandomCharacter(specialArray);
    selectedPasswordPool = selectedPasswordPool.concat(specialArray);
  }

  //Get the length difference between createdPassword length and user inputed length.
  var restLength = parseInt(passWordLength) - createdPassword.length

  //Use loop generate the rest password from selectedPasswordPool and add to createdPassword.
  for (var i = 0; i < (restLength); i++) {
    if (selectedPasswordPool.length !== 0) {
      createdPassword += getRandomCharacter(selectedPasswordPool);
    }
    //if none of the conditions has been chosen, generate a random pasword from all the arrays.
    else {
      selectedPasswordPool = selectedPasswordPool.concat(numericArray).concat(lowerCaseArray).concat(upperCaseArray).concat(specialArray);
      createdPassword += getRandomCharacter(selectedPasswordPool);
    }
  }


  //TODO randomCreatedPassword();


  // Return the final result to fuction.
  return createdPassword;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
