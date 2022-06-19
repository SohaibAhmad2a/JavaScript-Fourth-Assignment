/*Write a program that round a number to a given decimal places.*/
var number=parseFloat(prompt("Please insert the number: "));
var decimalPlaces=parseInt(prompt("Please enter the number of decimal places you want: "));
document.write("The number after rounding to ", decimalPlaces, " decimal places is: ", number.toFixed(decimalPlaces));