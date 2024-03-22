//12. Write a program to create a single string from the 
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

var arr = ["This", "is", "my", "cat"];
var singleString = arr.join(" ");
var singleStringWithoutSpace = arr.join("");

document.write(singleString)
document.write(singleStringWithoutSpace)