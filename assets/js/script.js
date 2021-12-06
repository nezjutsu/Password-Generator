// Assignment code here



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var cardBody = document.querySelector(".card-body");
//var cardHeader = document.querySelector(".card-header");
//var cardPrompts = document.querySelector(".card-prompts");

var passwordLength;
var numericPasswordPool = "0123456789";
var upperCasePasswordPool = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCasePasswordPool = "abcdefghijklmnopqrstuvwxyz";
var specialCharacterPasswordPool = "!@#$%^&*()/[]|.,`~";

cardBody.innerHTML = 'this is an example.'
console.dir(cardBody)

// Write password to the #password input
function writePassword() {
  var finalPasswordPool = "";
  var finalPasswordPrint = "";

  //var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordLength = parseInt(prompt("Length of Password (Must be greater than 8 & Less than 128): ", "8"));

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Please pick valid number.")
    return;
  }


  specialCharacterInclusion = (confirm("Do you want to include special characters?"))

  if (specialCharacterInclusion) {
    finalPasswordPool += specialCharacterPasswordPool
  }
  else {
    finalPasswordPool += ""
  }


  numberInclusion = (confirm("Do you want to include numbers?"));

  if (numberInclusion) {
    finalPasswordPool += numericPasswordPool
  }
  else {
    finalPasswordPool += ""
  }

  lowerCaseInclusion = (confirm("Do you want to include lowercase letters?"));

  if (lowerCaseInclusion) {
    finalPasswordPool += lowerCasePasswordPool
  }
  else {
    finalPasswordPool += ""
  }
  upperCaseInclusion = confirm("Would you like to include uppercase letters?");

  if (upperCaseInclusion) {
    finalPasswordPool += upperCasePasswordPool
  }
  else {
    finalPasswordPool += ""
  }

  for (i = 0; i < passwordLength; i++) {
    var random = Math.floor(Math.random() * finalPasswordPool.length)
    console.log(random)
    finalPasswordPrint += finalPasswordPool[random];
  }

  console.log(finalPasswordPool);
  cardBody.innerText = finalPasswordPrint;
  //passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)


