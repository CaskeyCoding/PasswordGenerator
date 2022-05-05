/** Random Password Generator
 * 
 *  Reads index.html page and generates password
 */

function generatePassword() {  
  var password = "";	
  var length = document.getElementById("length").value;  
  var lowercase = document.getElementById("lowercase").checked;  
  var uppercase = document.getElementById("uppercase").checked;  
  var numbers = document.getElementById("numbers").checked;  
  var symbols = document.getElementById("symbols").checked;
  var chars = "";
  if(numbers){
	chars += "0123456789";
  }
  if(symbols){
	chars += "!@#$%^&*()";
  }
  if(uppercase){
	chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if(lowercase){
	chars += "abcdefghijklmnopqrstuvwxyz";
  }
  for(var i = 0; i <= length; i++){
	var randomNumber = Math.floor(Math.random() * chars.length);
	password += chars.substring(randomNumber, randomNumber+1);
  }
  document.getElementById("pwdField").value = password;
}

function copyPassword() {
  document.getElementById("pwdField").select();
  document.execCommand("copy");  
  alert("Password Copied to Clipboard.");
}