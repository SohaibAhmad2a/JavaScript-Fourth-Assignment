/* Create a Date object for the current date and time. Extract the
hours, reset the date object an hour ahead and finally display the
date object in your browser. */

var date=new Date();
console.log("current date: ", date);
var hours=date.getHours();
date.setHours((hours+1));
console.log("Date after 1 hour will be: ", date);