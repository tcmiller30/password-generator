// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters = [  "@","%","+","\\","/","'","!","#","$","^","?",":",",",")","(","}","{","]","[","~","-","_",".",]
var lowerCaseCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseCharacters = ["A","B","C","D","E","F","G","H","I","J"];
var numericalCharacters = [0,1,2,3,4,5,6,7,8,9];
// Write password to the #password input
function writePassword() {
  //password set to result of generatePassword Function
  var password = generatePassword();
  //selects textbox using DOM manipulation
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

function generatePassword(){
  
}

function getParameters(){
  var length = prompt('Enter the desired length of your password (8-128)', 10);
  var hasSpecial = confirm('Include Special Characters?');
  var hasLower = confirm('Include lower case characters?');
  var hasUpper = confirm('Include Upper Case Characters?');
  var hasNumber = confirm('Include Numbers?');
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
