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
 window.confirm("select character types to include in the password ");
 // 3 combinations are the min requirement
 var option=window.prompt("1.Uppercase,Lowercase,numbers,special charecters" +  "\n 2.Uppercase,Lowercase,numbers " +"\n 3.uppercase,numbers,special charecters"  + "\n 4.Lowercase,numbers,special charecters"  + "\n 5.Uppercase,lowercase,special charecters ");
 if(parseInt(option) === 1){
  var charecters= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*+/";
  // to randomly generate the password
  for(var i=0;i<= pwdlength ;i++){
  password += charecters.charAt(Math.floor(Math.random()*charecters.length));
}
return password;
}

if((parseInt(option)) === 2){
  var charecters= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
  for(var i=0;i<= pwdlength ;i++){
    password += charecters.charAt(Math.floor(Math.random()*charecters.length));
  }
  return password;
}

if (parseInt(option) === 3){
  var charecters= "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*+/";
  for(var i=0;i<= pwdlength ;i++){
    password += charecters.charAt(Math.floor(Math.random()*charecters.length));
  }
  return password;
}

if (parseInt(option) === 4){
  var charecters= "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*+/";
  for(var i=0;i<= pwdlength ;i++){
    password += charecters.charAt(Math.floor(Math.random()*charecters.length));
  }
  return password;
}
if (parseInt(option) === 5){
  var charecters= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*+/";
  for(var i=0;i<= pwdlength ;i++){
    password += charecters.charAt(Math.floor(Math.random()*charecters.length));
  }
  return password;
}

else
return;

}
}


// Adding event listener to generate button
generateBtn.addEventListener("click", writePassword);
