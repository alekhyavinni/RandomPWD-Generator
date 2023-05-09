// Assignment Code
var generateBtn = document.getElementById("generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
 
 //generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
function generatePassword(){
  var criteria= window.confirm("want the system to generate password");
 if(!criteria){
  return;
 }
 var lengthof = window.prompt("select length min-8 max-128");
 var pwdlength  =parseInt(lengthof);
 if(pwdlength < 8 || pwdlength >128){
  window.alert("choose btwn specified limit");
  return;
}

else{
var charecters= "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var password ="";

for(var i=0;i<= pwdlength ;i++){
  var randompwd = Math.floor(Math.random()*charecters.length);
  password += charecters.substring(randompwd,randompwd+1);
}
}
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
