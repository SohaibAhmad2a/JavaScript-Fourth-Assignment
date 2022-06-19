/* Write a program to validate email address with following evaluation
a. This string must contain @
b. The @ must have at least 1 char in front
c. The string must contain .(dot) after @ and at least 1 char. */


var email=prompt("Please enter your email: ");
var bol=false;
if (email.includes("@") && email.charAt(0)!=="@"){
    if (email.includes(".") && email.indexOf(".") > email.indexOf("@")+1){
        bol=true;
    }
}
if (bol){
    console.log("You have entered a correct password");
}
else{
    console.log("You entered an incorrect password");
}
