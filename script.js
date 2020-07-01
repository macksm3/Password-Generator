// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // declare the list of characters available to use in the password
  const alphaLower ="abcdefghijklmnopqrstuvwxyz",
        alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        numeric = "0123456789",
        special = "!@#$%^&*()";
  let charOptions = "";

// charOptions = alphaLower + alphaUpper + numeric + special;

  // set the password length
  let pwLength = prompt("enter a number between 8 and 128");
  if (pwLength >= 8 && pwLength <= 128) {
    // add character options
    if (confirm("include lower case letters?")) charOptions = charOptions + alphaLower;
    if (confirm("include upper case letters?")) charOptions = charOptions + alphaUpper;
    if (confirm("include numbers?")) charOptions = charOptions + numeric;
    if (confirm("include special characters?")) charOptions = charOptions + special;
    // validate character selection
    if (charOptions === "") return "please try again \n this time select characters sets to include";
    // options complete
    let newPassword = "";
    for (var i = 0; i < pwLength; i++) {
    // build new password with random chatacters from the list
    newPassword += charOptions.charAt(Math.floor(Math.random() * charOptions.length));
    }
    return newPassword;
  }
  else return "invalid length, try again";
}

// Write password to the #password input
function writePassword() {   
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
