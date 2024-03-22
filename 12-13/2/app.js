//2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

var num1 = 10;
var num2 = 5;
var message = "";

if (num1 === num2) {
    message = "The two integers are equal: ${num1}";
}

else if (num1 > num2) {
    message = `The larger integer is: ${num1}`;
} else {
    message = `The larger integer is: ${num2}`;
}

document.write(message);



