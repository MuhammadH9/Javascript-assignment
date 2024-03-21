//4. Write a program to print multiplication table of any 
// number using for loop. Table number & length should be 
// taken as an input from user.

var tableNumber = +prompt("Enter Table number");
var tablelength = +prompt("Enter table length");

for (var i = 1; i <= tablelength; i++) {
    document.write(tableNumber + " x" + " " + i + " " + " = " + " " + tableNumber * i + "<br />")
}












