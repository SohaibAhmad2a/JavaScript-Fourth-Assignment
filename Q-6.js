/* Write a program that simulates a dice using random() method of JS
Math class. Display the value of dice in your browser. */

var generateNumber=Math.floor(6*Math.random() + 1); // 6 is multipied, and 1 is added so that our return limit changes to 1 to 6 instead of 0 to 1 as Math.random() return b/w 1 and 0.
document.write("Random Dice Value: ", generateNumber);
