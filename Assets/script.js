// Assignment Code
var generateBtn = document.getElementById("generate");

//declaring global variable
var password ="";


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
function generatePassword(){
  
  var password ="";
  var criteria= window.confirm("want the system to generate password");
 if(!criteria){
  return;
 }
 var lengthof = window.prompt("select length min-8 max-128");

 // converting text value to integer
 var pwdlength  =parseInt(lengthof);
 if(pwdlength < 8 || pwdlength >128){
  window.alert("choose btwn specified limit");
  return;
}



else{
  var confirmation = window.confirm("select character types to include in the password ");
if(!confirmation){
  return;
}
  var option1 =window.confirm("uppercase");
  var option2 = window.confirm("Lower case");
  var option3 = window.confirm("numbers");
  var option4 = window.confirm("special");

if(option1 && option2 && option3 && option4){
    var charecters= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*+/";
  // to randomly generate the password
  for(var i=0;i<= pwdlength ;i++){
  password += charecters.charAt(Math.floor(Math.random()*charecters.length));
  }
return password;
}

if(option1 && !option2 && !option3 && !option4){
  var charecters= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// to randomly generate the password
for(var i=0;i<= pwdlength ;i++){
password += charecters.charAt(Math.floor(Math.random()*charecters.length));
}
return password;
}

if(option1 && option2 && !option3 && !option4){
  var charecters= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
// to randomly generate the password
for(var i=0;i<= pwdlength ;i++){
password += charecters.charAt(Math.floor(Math.random()*charecters.length));
}
return password;
}

if(option1 && option2 && option3 && !option4){
  var charecters= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
// to randomly generate the password
for(var i=0;i<= pwdlength ;i++){
password += charecters.charAt(Math.floor(Math.random()*charecters.length));
}
return password;
}

if(option1 && !option2 && option3 && !option4){
  var charecters= "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
// to randomly generate the password
for(var i=0;i<= pwdlength ;i++){
password += charecters.charAt(Math.floor(Math.random()*charecters.length));
}
return password;
}

if(option1 && !option2 && !option3 && option4){
  var charecters= "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*+/";
// to randomly generate the password
for(var i=0;i<= pwdlength ;i++){
password += charecters.charAt(Math.floor(Math.random()*charecters.length));
}
return password;
}

if(!option1 && option2 && option3 && option4){
  var charecters= "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*+/";
// to randomly generate the password
for(var i=0;i<= pwdlength ;i++){
password += charecters.charAt(Math.floor(Math.random()*charecters.length));
}
return password;
}

if(!option1 && option2 && !option3 && option4){
  var charecters= "abcdefghijklmnopqrstuvwxyz!@#$%^&*+/";
// to randomly generate the password
for(var i=0;i<= pwdlength ;i++){
password += charecters.charAt(Math.floor(Math.random()*charecters.length));
}
return password;
}

if(!option1 && option2 && !option3 && !option4){
  var charecters= "abcdefghijklmnopqrstuvwxyz";
// to randomly generate the password
for(var i=0;i<= pwdlength ;i++){
password += charecters.charAt(Math.floor(Math.random()*charecters.length));
}
return password;
}

if(!option1 && !option2 && option3 && option4){
  var charecters= "0123456789!@#$%^&*+/";
// to randomly generate the password
for(var i=0;i<= pwdlength ;i++){
password += charecters.charAt(Math.floor(Math.random()*charecters.length));
}
return password;
}

if(!option1 && !option2 && option3 && !option4){
  var charecters= "0123456789";
// to randomly generate the password
for(var i=0;i<= pwdlength ;i++){
password += charecters.charAt(Math.floor(Math.random()*charecters.length));
}
return password;
}

if(!option1 && !option2 && !option3 && option4){
  var charecters= "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*+/";
// to randomly generate the password
for(var i=0;i<= pwdlength ;i++){
password += charecters.charAt(Math.floor(Math.random()*charecters.length));
}
return password;
}
}
}
// Adding event listener to generate button
generateBtn.addEventListener("click", writePassword);
