/* Write a program that shows the message “First fifteen days of the
month” if the date is less than the 16th of the month else shows “Last
days of the month”. */



var Date2= new Date(prompt("Please enter the date in yyyy/mm/dd format: "))
var getDaate=Date2.getDate();
if (getDaate>0 && getDaate<=15){
    console.log(Date2);
    console.log("First fifteen days of the month");
}
else if (getDaate>15 && getDaate<=31){
    console.log(Date2);
    console.log("Last days of the month");
}
else{
    console.log(Date2);
}