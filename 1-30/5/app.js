//1. Write a program that take two numbers & add them in a 
// new variable. Show the result in your browser.
// var num_1 = 5;
// var num_2 = 3;
// var sum_1 = num_1 + num_2;
// document.write("Sum of " + num_1 + " and " + num_2 + " is " + sum_1);

//2. Repeat task1 for subtraction, multiplication, division &
// modulus.
// var sum_2 = num_1 - num_2;
// document.write("<br />Subtraction of " + num_1 + " and " + num_2 + " is " + sum_2);

// var sum_3 = num_1 * num_2;
// document.write("<br />Multiplication of " + num_1 + " and " + num_2 + " is " + sum_3);

// var sum_4 = num_1 / num_2;
// document.write("<br />Division of " + num_1 + " and " + num_2 + " is " + sum_4);

//3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value 
// by 3. 
// l. Output : “The remainder is : 0”.
// var value;
// document.write("<br />Value after variable declaration is " + value);
// value = 10;
// document.write("<br />Initial Value: " + value);
// document.write("<br />Value after Increment is: " + ++value);
// value += 7;
// document.write("<br />Value after Addition is: " + value);
// document.write("<br />Value after decrement is: " + --value);
// var remain = value % 3;
// document.write("<br />The remainder is: " + remain);


//4. Cost of one movie ticket is 600 PKR. Write a script to store
// ticket price in a variable & calculate the cost of buying 5 
// tickets
// var ticketPrice = 600;
// var result = ticketPrice * 5;
// document.write("<br />Total cost to buy 5 Tickets to a movie is " + result + " PKR");

//5. Write a script to display multiplication table of any 
// number in your browser.
// var num = 10;
// document.write(`<br />${num} * 1 = ${num * 1}<br />${num} * 2 = ${num * 2}<br />${num} * 3 = ${num * 3}<br />${num} * 4 = ${num * 4}<br>${num} * 5 = ${num * 5}<br>${num} * 6 = ${num * 6}<br>${num} * 7 = ${num * 7}<br>${num} * 8 = ${num * 8}<br>${num} * 9 = ${num * 9}<br>${num} * 10 = ${num * 10}<br>`)

//6. The Temperature Converter: It’s hot out! Let’s make a 
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
// var celsius = 45;
// var fahrenheit = 100;
// var convert_1 = (celsius * (9/5)) + 32;
// var convert_2 = (fahrenheit - 32) * (5/9);
// document.write(`<br />${celsius}<sup>o</sup>C is ${convert_1}<sup>o</sup>F<br />${fahrenheit}<sup>o</sup>F is ${Math.round(convert_2)}<sup>o</sup>C`);

//7. Write a program to implement checkout process of a 
// shopping cart system for an e-commerce website. Store 
// the following in variables
// MATH EXPRESSIONS | JAVASCRIPT
// Page 5 of 9
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.
// var item_1 = 650;
// var item_2 = 100;
// var quan_1 = 5;
// var quan_2 = 1;
// var shipping = 100;
// var result_1 = (item_1 * quan_1) + (item_2 * quan_2) + shipping;
// document.write(`<br />Price of Item 1 is ${item_1}<br />Price of Item 2 is ${item_2}<br />Quantity of Item 1 is ${quan_1}<br />Quantity of Item 2 is ${quan_2}<br>Shipping Charges are ${shipping}<br><br>Total cost of your order is ${result_1}`);

//8. Store total marks & marks obtained by a student in 2 
// variables. Compute the percentage & show the result in 
// your browser.
// var total = 850;
// var obtained = 750;
// var percent = (750 * 100) / 850;
// document.write(`<br />Total Marks: ${total}<br>Marks Obtained: ${obtained}<br />Percentage: ${Math.round(percent)}`);

//9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a 
// script to convert the total currency to Pakistani Rupees. 
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee 
// and 1 Saudi Riyal = 28 Pakistani Rupee).
// var us = 10;
// var riyal = 25;
// var conversion = (us * 104.80) + (riyal * 28);
// document.write(`<br />Total Currency in PKR: ${conversion}`);

//10. Write a program to initialize a variable with some 
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression
// var calculation = 10;
// var result_5 = ((calculation + 5) * 10) / 2;

//11. The Age Calculator: Forgot how old someone is? 
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored 
// values.
// Output them to the screen like so: “They are either NN or NN
// years old”.

// var current_year = 2016;
// var birth_year = 1992;
// var result_6 = current_year - birth_year;
// document.write(`<br />Current Year: ${current_year}<br />Birth Year: ${birth_year}<br />Your Age is either ${result_6 - 1} or ${result_6}`);

//12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// MATH EXPRESSIONS | JAVASCRIPT
// Page 8 of 9
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The 
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

// var radii = 20;
// var circum = 2 * 3.142 * radii;
// var area = 3.142 * radii ** 2;
// document.write(`<br />Radius of Circle is ${radii}<br />The Circumference is ${circum}<br />The Area is ${area}`);

// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is? 
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need 
// NNNN to last you until the ripe old age of NN”.

// var snack = "Chips";
// var current_age = 18;
// var max_age = 80;
// var amount = 5;
// var result_7 = (max_age - current_age) * 365.25 * 5;
// document.write(`<br />Favourite Snack: ${snack}<br />Current Age: ${current_age}<br />Estimated Maximum Age: ${max_age}<br />Amount of Snacks Per Day: ${amount}<br />You will need ${Math.round(result_7)} ${snack} to last you until the ripe old age of ${max_age}`);

