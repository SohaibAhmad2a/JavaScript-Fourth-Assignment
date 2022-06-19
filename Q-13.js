/* Write a program that determines the minutes since midnight, Jan
1, 1970 and assigns it to a variable that hasn't been declared
beforehand. Use any variable you like to represent the Date object. */
var date = new Date();
/*date.setDate(05);   The commented code is written in order to find miliseconds till "Sat Dec 05 2015 22:32:23 GMT+0500."
date.setMonth(11);
date.setFullYear(2015);
date.setHours(22);
date.setMinutes(32);
date.setSeconds(23);*/
var minutes=(date.getTime())/(1000*60);
var hours=minutes/60;
var days=hours/24;
var years=days/365;
console.log(date)
console.log("Elpased miliseconds since Epoch Time: ", date.getTime());
console.log("Elpased minutes since Epoch Time: ", minutes);
console.log("Elpased hours since Epoch Time: ", hours);
console.log("Elpased days since Epoch Time: ", days);
console.log("Elpased years since Epoch Time: ", years);
