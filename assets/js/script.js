// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters = ["@","%","+","\\","/","'","!","#","$","^","?",":",",",")","(","}","{","]","[","~","-","_","."];
var lowerCaseCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numericalCharacters = ['0','1','2','3','4','5','6','7','8','9'];
// Write password to the #password input
function writePassword() {
  //password set to result of generatePassword Function
  var password = generatePassword();
  //selects textbox using DOM manipulation
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

//function that interacts with character arrays in generatePassword.
  //generate a 
function getRandom(arr){
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement
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
    //asks user for character preferences and stores the results
  var hasSpecial = confirm('Include Special Characters? Press OK.');
  var hasLower = confirm('Include lower case characters? Press OK.');
  var hasUpper = confirm('Include Upper Case Characters? Press OK.');
  var hasNumber = confirm('Include Numbers? Press OK.');

  //Checks if all the character preferences are false. If true, alerts the user to choose at least one type and returns null
  if(!hasSpecial && !hasLower && !hasUpper && !hasNumber){
    alert('You must select at least one character type for your password to be generated.');
    return null;
  }

  //stores all chosen character parameters in an object
  var passwordParameter = {
    length: length,
    hasSpecial: hasSpecial,
    hasLower: hasLower,
    hasUpper: hasUpper,
    hasNumber: hasNumber
  };

  //returns the object to be used as reference in the generatePassword function
  return passwordParameter;
}
//Creates randomly generated string using parameters provided by user to be used for passwords.
function generatePassword(){
  var parameters = getParameters();
  var result = [];
  var chosenCharacters = [];

  // Checks which parameters were selected by user and adds it to chosenCharacter array to be used for generation
  if(parameters.hasSpecial){
    chosenCharacters = chosenCharacters.concat(specialCharacters);
  }
  if(parameters.hasLower){
    chosenCharacters = chosenCharacters.concat(lowerCaseCharacters);
  }
  if(parameters.hasUpper){
    chosenCharacters = chosenCharacters.concat(upperCaseCharacters);
  }
  if(parameters.hasNumber){
    chosenCharacters = chosenCharacters.concat(numericalCharacters);
  }

  //for loop that takes the length designated by user from the returned object from the getParameters function
  for(var i = 0; i < parameters.length; i++){
    var chosenCharacter = getRandom(chosenCharacters);

    result.push(chosenCharacter)
  }
  //returns
  return result.join('');
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
