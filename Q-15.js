/* Write a program to ask the user about his age. Calculate and show
his birth year in your browser */

var age=parseInt(prompt("Please Enter your age in years: "));
var date=new Date();
var year=date.getFullYear();
var setyear=date.setFullYear(year-age);
document.write("Your age is: ", age, "<br>", "Your birth years is: ", date.getFullYear());