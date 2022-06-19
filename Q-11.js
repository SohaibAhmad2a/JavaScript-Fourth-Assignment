/* Write a program to take input of a Number and find a Mean of All
Digits
E.g: 666 = 6 + 6 + 6 = 18 /3 = 6
1246 = 1 + 2 + 4 + 6 = 13 / 4  */

// This is applicable to integers only as required in the Question
var number=prompt("Please enter your desired number: ");   
var start=0;
for (var i=0;i<number.length;i++){
    start=start+parseInt(number.charAt(i));
}
console.log((start/number.length));


// In order to expand the application of program to floating numbers, we need to make some changes. We are modifying to the case where we don't need decimal digits of floating numbers.

var number=parseInt(prompt("Please enter your desired number: "));   //Including parseInt method will remove decimal places digits
var convertBacktoString=number.toString();
var start=0;
for (var i=0;i<convertBacktoString.length;i++){
    start=start+parseInt(convertBacktoString.charAt(i));
}
console.log((start/convertBacktoString.length));