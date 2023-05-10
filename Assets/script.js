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
 // 2 combinations are the min requirement
 var option=window.prompt(" 1.Uppercase,Lowercase,numbers,special charecters" +  "\n 2.Uppercase,Lowercase,numbers" +"\n 3.uppercase,numbers,special charecters"  + "\n 4.Lowercase,numbers,special charecters"  + "\n 5.Uppercase,lowercase,special charecters" +"\n 6.Uppercase,Lowercase" + "\n 7. Uppercase , Numbers" + "\n 8. Lowercase,Numbers" + "\n 9.Uppercase, special charecters" + "\n 10.Lowercase , special charecters " + "\n 11.Nubers ,special charecters");
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
if (parseInt(option) === 6){
  var charecters= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for(var i=0;i<= pwdlength ;i++){
    password += charecters.charAt(Math.floor(Math.random()*charecters.length));
  }
  return password;
}
if (parseInt(option) === 7){
  var charecters= "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  for(var i=0;i<= pwdlength ;i++){
    password += charecters.charAt(Math.floor(Math.random()*charecters.length));
  }
  return password;
}
if (parseInt(option) === 8){
  var charecters= "abcdefghijklmnopqrstuvwxyz0123456789";
  for(var i=0;i<= pwdlength ;i++){
    password += charecters.charAt(Math.floor(Math.random()*charecters.length));
  }
  return password;
}
if (parseInt(option) === 9){
  var charecters= "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*+/";
  for(var i=0;i<= pwdlength ;i++){
    password += charecters.charAt(Math.floor(Math.random()*charecters.length));
  }
  return password;
}
if (parseInt(option) === 10){
  var charecters= "abcdefghijklmnopqrstuvwxyz!@#$%^&*+/";
  for(var i=0;i<= pwdlength ;i++){
    password += charecters.charAt(Math.floor(Math.random()*charecters.length));
  }
  return password;
}
if (parseInt(option) === 11){
  var charecters= "0123456789!@#$%^&*+/";
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
