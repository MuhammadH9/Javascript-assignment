//1. Write a program that takes a character (number or string) 
// in a variable & checks whether the given input is a 
// number, uppercase letter or lower case letter. (Hint: ASCII 
// codes:- A=65, Z=90, a=97, z=122).
// var type = prompt("Enter a Character: ");
// var code = type.charCodeAt(0);
// if (code >= 65 && code <= 90){
//     alert(`${type} is an Uppercase Letter!`);
// }
// else if (code >= 97 && code <= 122){
//     alert(`${type} is a Lowercase Letter!`);
// }

// else if(code >= 48 && code <= 57){
//     alert(`${type} is a number!`)
// }

// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.
// var int_1 = +prompt("Enter the First Integer: ");
// var int_2 = +prompt("Enter the Second Integer: ");
// if (int_1 > int_2){
//     alert(`${int_1} is greater than ${int_2}`);
// }
// else if (int_2 > int_1){
//     alert(`${int_2} is greater than ${int_1}`);
// }
// else{
//     alert(`${int_1} and ${int_2} are equal!`);
// }


//3. Write a program that takes input a number from user & 
// state whether the number is positive, negative or zero.
// var char = +prompt("Enter a Number: ");
// if (char < 0){
//     alert(`${char} is -ve`);
// }
// else if(char > 0){
//     alert(`${char} is +ve`);
// }
// else{
//     alert(`${char} is zero`)
// }

//4. Write a program that takes a character (i.e. string of 
// length 1) and returns true if it is a vowel, false otherwise
// var vowel = prompt("Enter a Character: ");
// var arr = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
// var length = arr.length;
// var count = 0;
// for (var i of arr){
//     count++;
//     if (vowel === i){
//         alert("True");
//         break;
//     }
//     else if(count === length){
//         alert("False");
//     }
// }

//5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then 
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are 
// same, show message “Correct! The password you 
// entered matches the original password”. Show 
// “Incorrect password” otherwise.
// var password = "abc123";
// var pass = prompt("Enter Your Password: ");
// if (pass === password){
//     alert("Correct! The Password you entered matches the original password");
// }
// else if(pass.length === 0){
//     alert("Please Enter a Password!");
// }

// else if(pass !== password){
//     alert("Incorrect Password!");
// }

// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

// var greeting;
// var hour = 13;
// if (hour < 18){
//     greeting = "Good Day";
// }
// else{
//     greeting = "Good Evening";
// }

//7. Write a program that takes time as input from user in 24 
// hours clock format like: 1900 = 7pm. Implement the 
// following case using if, else & else if statements
// var time = +prompt("Enter Time in 24 Hours Format (1900 = 7pm): ");
// if (time >= 0000 && time < 1200){
//     alert("Good Morning!");
// }
// else if (time >= 1200 && time < 1700){
//     alert("Good Afternoon!");
// }
// else if(time >= 1700 && time < 2100){
//     alert("Good Evening!");
// }
// else if(time >= 2100 && time <=2359){
//     alert("Good Night!");
// }