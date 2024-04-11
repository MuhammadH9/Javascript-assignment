//1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
// var int = +prompt("Enter a +ve Integer: ");
// alert(`Number: ${int}\nRound-Off Value: ${Math.round(int)}\nFloor Value: ${Math.floor(int)}\nCeil Value: ${Math.ceil(int)}`);

//2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
// var negative = +prompt("Enter a -ve Floating Point Number: ");
// if (negative > 0){
//     alert("Error! ");
// }

// else{
//     alert(`Number: ${negative}\nRound-Off Value: ${Math.round(negative)}\nFloor Value: ${Math.floor(negative)}\nCeil Value: ${Math.ceil(negative)}`);
// }


//3. Write a program that displays the absolute value of a 
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5
// var abs = +prompt("Enter a -ve number: ");
// if (abs < 0){
//     alert(`The absolute value of ${abs} is ${Math.abs(abs)}`);
// }
// else{
//     alert("Error! ");
// }

//4. Write a program that simulates a dice using random() 
// method of JS Math class. Display the value of dice in your 
// browser.:
// var random = Math.floor((Math.random() * 6) + 1);
// alert(`Random Dice Value: ${random}`);

//5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser
// var random_coin = Math.floor((Math.random() * 2) + 1);
// if (random_coin === 1){
//     alert(`${random_coin}\nRandom Coin Value: Tails`);
// }
// else{
//     alert(`${random_coin}\nRandom Coin Value: Heads`);
// }

//6. Write a program that shows a random number between 1 
// and 100 in your browser.
// var random = Math.floor((Math.random() * 100) + 1);
// alert(`Random Value between 1 and 100: ${random}`);

//7. Write a program that asks the user about his weight. Parse 
// the user input and display his weight in your browser. 
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

// var weight = prompt("Enter Your Weight in Kgs: ")
// var arr = weight.split("");
// var arr_new = [];
// for (var i of arr){
//     if (i >= 0 && i <= 9){
//         arr_new.push(i);
//     }
// }
// alert(`The weight of user is ${+arr_new.join("")} Kilograms! `);


//8. Write a program that stores a random secret number from 
// 1 to 10 in a variable. Ask the user to input a number 
// between 1 and 10. If the user input equals the secret 
// number, congratulate the user.
// var random = Math.floor((Math.random() * 10) + 1);
// var guess;
// while (true){
//     guess = +prompt("Enter the Guess no (integer) which is between 1 and 10 (inclusive): ");
//     if (guess === random){
//         alert(`Congratulations! ${guess} is the secret no `);
//         break;
//     }
//     else{
//         alert("Try Again! ");
//     }
// }