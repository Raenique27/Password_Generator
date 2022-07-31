// Assignment code here
 var passwordCriteria = {
    Lowers: "bcagfejihponmlsqrutvxwzy",
    Uppers: "BCAGFEJIHPONMLSQRUTVXWZY",
    Numbers: "1234567890",
    Characters: "!#@$*^&%"
   };

var combinedCharacterSets  = ""

function generatePassword () {
  var finalPassword = ""
  var passwordLengthPrompt = window.prompt("Choose length of password !");
  passwordLengthPrompt= parseInt(passwordLengthPrompt);
  
  if (passwordLengthPrompt < 8) {
    alert("Password length needs to be at least 8 characters. Please choose length of password again !");
      return null

  } else if (passwordLengthPrompt > 128) {
      alert("Password length cannot be more than 128 characters. Please choose length of password again !");
      return null
    } 

  console.log(passwordLengthPrompt);

  var confirmLowers = window.confirm ("Would you like to include lowercase letters ?");
  var confirmUppers = window.confirm ("Would you like to include uppercase letters ? ");
  var confirmNumbers = window.confirm ("Would you like to include numbers ?");
  var confirmCharacters = window.confirm ("Would you like to include special characters ?");

};



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

  
  




