// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // declare the list of characters available to use in the password
  const charOptions = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
  // set the password length
  let pwLength = prompt("enter a number between 8 and 128");
  let newPassword = "";
  for (var i = 0; i < pwLength; i++) {
  // build new password with random chatacters from the list
  newPassword += charOptions.charAt(Math.floor(Math.random() * charOptions.length));
  }
  return newPassword;
}

// Write password to the #password input
function writePassword() {   
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
