/* Write a program to take password as an input from user. The
password must qualify these requirements:
a. It should contain alphabets and numbers
b. It should not start with a number
c. It must at least 8 characters long
d. If the password does not meet the above requirements, prompt
the user to enter a valid password. For character codes of a-z,
A-Z & 0-9 */

const aphabetss = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const number=[0,1,2,3,4,5,6,7,8,9];
var password=prompt("Please enter your password: ");
var bol=true;
var bol1=true;
var bol2=false;
var bol4=false;
if (number.includes(parseInt(password.charAt(0)))){
    bol=false;
}
if (password.length < 8){
    bol1=false;
}
for (var i=0;i<password.length;i++){
    var element=password.charAt(i)
    var upperCasedElement=element.toUpperCase()
    if (aphabetss.includes(upperCasedElement)){
        bol2=true;
        break;
    }
for (var j=0;j<password.length;j++){
    if(number.includes(parseInt(password.charAt(j)))){
        bol4=true;
        break;
    }
}
}
if (bol===false || bol1===false || bol4===false || bol2===false){
    console.log("Your password doesn't meet the requirements.");
}
else{
    console.log("You have entered a correct password")
}
