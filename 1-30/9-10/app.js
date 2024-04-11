//1. Write a program to take “city” name as input from user. If 
// user enters “Karachi”, welcome the user like this: 
// “Welcome to city of lights”

// let city_name = prompt("Enter a city name: ");
// if (city_name === "Karachi" || city_name === "karachi"){
//     alert("Welcome to the city of lights!");
// }
// else{
//     alert("Welcome to " + city_name);
// }

//2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the 
// user is female, give the message: Good Morning Ma’am.
// let gender = prompt("Enter your Gender: ");
// if (gender === "male" || gender === "Male"){
//     alert("Good Morning Sir!");
// }
// else if (gender === "female" || gender === "Female"){
//     alert("Good Morning Maam!");
// }

//3. Write a program to take input color of road traffic signal 
// from the user & show the message according to this table:
// let color = prompt("Enter color of road traffic signal: ");
// if (color === "red" || color === "Red"){
//     alert("Must Stop");
// }
// else if (color === "green" || color === "Green"){
//     alert("Move Now");
// }

// else if (color === "yellow" || color === "Yellow"){
//     alert("Ready to Move");
// }

//4. Write a program to take input remaining fuel in car (in 
// litres) from user. If the current fuel is less than 0.25litres, 
// show the message “Please refill the fuel in your car”
// var fuel = +prompt("Enter Current fuel in car (Litres): ");
// if (fuel < 0.25){
//     alert("Please Refill the fuel in your car!");
// }

//5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
// a is working, b is not working, c is working and two alerts are triggered, d is working, e is working and one alert is triggered, f is working.

//6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute 
// grade as per following table:
// var marks_1 = +prompt("Enter marks of First Subject: ");
// var marks_2 = +prompt("Enter marks of Second Subject: ");
// var marks_3 = +prompt("Enter marks of Third Subject: ");
// var total_marks_1 = +prompt("Enter Total Marks: ");
// var totals = Math.round(((marks_1 + marks_2 + marks_3) * 100 )/ total_marks_1);
// var grades;
// var remarks;
// if (totals >= 80){
//     grades = "A-One";
//     remarks = "Excellent";
// }

// else if (totals >= 70){
//     grades = "A";
//     remarks = "Good";
// }

// else if (totals >= 60){
//     grades = "B";
//     remarks = "You need to improve";
// }

// else{
//     grades = "Fail";
//     remarks = 'Sorry';
// }

// document.write(`<br><h1>Marksheet</h1>Total Marks: ${total_marks_1}<br>Marks Obtained: ${marks_1 + marks_2 + marks_3}<br>Percentage: ${totals}%<br>Grade: ${grades}<br>Remarks: ${remarks}`);


//7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.
// var secret = 8;
// while (true){
//     let guess = +prompt("Guess the Secret No: ");
//     if (guess === secret){
//         alert("Bingo! Correct Answer");
//         break;
//     }
//     else if (guess === secret + 1){
//         alert("Close enough to the correct answer!");
//     }
// }

//8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number 
// is divisible by 3.

// var divisible = +prompt("Enter a number which is divisible by 3: ");
// if (divisible % 3 === 0){
//     alert(`${divisible} is divisible by 3`);
// }
// else{
//     alert(`${divisible} is not divisible by 3`);
// }

//9. Write a program that checks whether the given input is an
// even number or an odd number.
// let even_odd = +prompt("Enter an Even number or an Odd number: ");
// if (even_odd % 2 === 0){
//     alert(`${even_odd} is an even number!`);
// }
// else{
//     alert(`${even_odd} is an odd number`);
// }

//10. Write a program that takes temperature as input and 
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”
// var temp = +prompt("Enter Current Temperature: ");
// if (temp > 40){
//     alert("It is too hot outside.");
// }

// else if (temp > 30){
//     alert("The Weather today is Normal.");
// }

// else if (temp > 20){
//     alert("Today’s Weather is cool.");
// }

// else if (temp > 10){
//     alert("“OMG! Today’s weather is so Cool.");
// }


// //11. Write a program to create a calculator for +,-,*, / & % 
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.
// var nums_1 = +prompt("Enter first number: ");
// var nums_2 = +prompt("Enter second number: ");
// var operation = prompt("Enter Operation(+, -, *, / or %): ");
// if (operation === "+"){
//     alert(`Result: ${nums_1 + nums_2}`);
// }
// else if (operation === "-"){
//     alert(`Result: ${nums_1 - nums_2}`);
// }
// else if (operation === "*"){
//     alert(`Result: ${nums_1 * nums_2}`);
// }
// else if (operation === "/"){
//     alert(`Result: ${nums_1 / nums_2}`);
// }
// else if (operation === "%"){
//     alert(`Result: ${nums_1 % nums_2}`);
// }