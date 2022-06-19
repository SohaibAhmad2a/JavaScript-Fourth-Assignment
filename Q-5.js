/* Write a program that takes a positive integer from user & display the
following in your browser.
a. number
b. round off value of the number
c. floor value of the number
d. ceil value of the number */

var number=prompt("Please enter a positive number: ");
document.write("Number: ", number, "<br>");
document.write("Round off Number: ", Math.round(number), "<br>");
document.write("Floor Value: ", Math.floor(number), "<br>");
document.write("Ceil Value: ", Math.ceil(number), "<br>");