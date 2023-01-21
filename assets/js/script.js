// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters = [  "@","%","+","\\","/","'","!","#","$","^","?",":",",",")","(","}","{","]","[","~","-","_",".",]
var lowerCaseCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseCharacters = ["A","B","C","D","E","F","G","H","I","J"];
var numericalCharacters = [0,1,2,3,4,5,6,7,8,9];
// Write password to the #password input
function writePassword() {
  //password set to result of generatePassword Function
  var password = getParameters();
  //selects textbox using DOM manipulation
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}
//Creates randomly generated string using parameters provided by user to be used for passwords.
function generatePassword(){
  var parameters = getParameters();

}

function getParameters(){
  var length = parseInt(prompt('Enter the desired length of your password 8-128'));
  
    //makes sure length entered by user is greater than 8
    if(length < 8){
      alert("Entry was less than 8. Please provide a number 8-128.");
      return null;
      //makes sure length entered by user is less than 128
    }else if(length > 128){
      alert("Entry was greater than 128. Please provide a number 8-128.");
      return null;
    //makes sure length entered by user is a number and not a string
    }else if(Number.isNaN(length)){
      alert('Entry was not a number. Please provide a number 8-128.');
      return null;
    }
  var hasSpecial = confirm('Include Special Characters? Press OK.');
  var hasLower = confirm('Include lower case characters? Press OK.');
  var hasUpper = confirm('Include Upper Case Characters? Press OK.');
  var hasNumber = confirm('Include Numbers? Press OK.');

  var passwordParameter = {
    hasSpecial:hasSpecial,
    hasLower:hasLower,
    hasUpper:hasUpper,
    hasNumber:hasNumber
  };

  return passwordParameter;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
