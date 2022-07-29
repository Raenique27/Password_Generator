// Assignment code here
 var passwordCriteria = {
    Lowers: "bcagfejihponmlsqrutvxwzy",
    Uppers: "BCAGFEJIHPONMLSQRUTVXWZY",
    Numbers: "1234567890",
    Characters: "!#@$*^&%"

   }

function writePasswordPrompt () {
  var passwordLengthPrompt = window.prompt("Choose length of password !");
  passwordLengthPrompt= parseInt(passwordLengthPrompt);
  
  if (passwordLengthPrompt < 8) {
    alert("Password length needs to be at least 8 characters. Please choose length of password again !");
    return writePasswordPrompt();

  } else if (passwordLengthPrompt > 128) {
      alert("Password length cannot be more than 128 characters. Please choose length of password again !");
      return writePasswordPrompt();

    }

  console.log(passwordLengthPrompt);
};

function passwordCharacterTypes () {
  var confirmCharacters = window.confirm ("Would you like you like to include lowercase, uppercase, numeric, and/or special characters ?");

  if (confirmCharacters === "Ok") {
      
  }
  
}


function generatePassword() {
  writePasswordPrompt();
  passwordCharacterTypes();
}




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

  
  




