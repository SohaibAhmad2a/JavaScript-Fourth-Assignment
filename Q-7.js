/* You have a string “The quick brown fox jumps over the lazy dog”.
Write a program to count the number of occurrences of the word “the”
in given string. */

var gString= "The quick brown fox jumps over the lazy dog";
var checkVar=0;
for (i=0;i<gString.length;i++){
    if ((gString.charAt(i)).toLowerCase()==="t" && (gString.charAt(i+1)).toLowerCase()==="h" && (gString.charAt(i+2)).toLowerCase()==="e" && gString.charAt(i+3)===" "){
        checkVar++;
    }
}
document.write("The number of occurances of \"the\" are: ", checkVar);