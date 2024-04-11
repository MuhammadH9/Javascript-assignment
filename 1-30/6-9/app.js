//1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:
// var a = 10;
// document.write(`<br />Result: <br />The value of a is ${a}<br />-----------------------<br /><br />The value of ++a is ${++a}<br />Now the value of a is ${a}<br /><br />The value of a++ is ${a++}<br>Now the value of a is ${a}<br><br>The value of --a is ${--a}<br>Now the value of a is ${a}<br><br>The value of a-- is ${a--}<br>Now the value of a is ${a}`);

//2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;
// var c = 2;
// var d = 1;
// var result_8 = --a - --b + ++b + b--;
// document.write(`<br />c is 2<br />d is 1<br />Result is ${result_8}`)
//--a:  decrements a by one and then returns 1
//--a - --b: --b decrement b by one and return 0, thus 1 - 0 and result is 1
//--a - --b + ++b: ++b increments  b by one and returns one thus 1 - 0 + 1 and result is 2
//--a - --b + ++b-1 + b--: b-- return b i.e. 1 and then decrements b by one, thus 1 - 0 + 1 + 1 and result is 3

//3. Write a program that takes input a name from user & 
// greet the user.

// var input = prompt("What is Your Name? ");
// if (input){
//     alert(`Welcome! ${input}`);
// }
// else{
//     alert("Welcome! Unknown Visitor")
// }

//5. Write a program to take input a number from user & 
// display it’s multiplication table on your browser. If user 
// does not enter a new number, multiplication table of 5 
// should be displayed by default.
// var table = +prompt("Input a number to print its table:(Default is 5) ");
// if (table){
//     document.write(`<br />${table} * 1 = ${table * 1}<br />${table} * 2 = ${table * 2}<br />${table} * 3 = ${table * 3}<br />${table} * 4 = ${table * 4}<br />${table} * 5 = ${table * 5}<br />${table} * 6 = ${table * 6}<br />${table} * 7 = ${table * 7}<br />${table} * 8 = ${table * 8}<br />${table} * 9 = ${table * 9}<br />${table} * 10 = ${table * 10}<br />`);
// }
// else{
//     document.write(`<br />${5} * 1 = ${5 * 1}<br />${5} * 2 = ${5 * 2}<br />${5} * 3 = ${5 * 3}<br />${5} * 4 = ${5 * 4}<br />${5} * 5 = ${5 * 5}<br />${5} * 6 = ${5 * 6}<br />${5} * 7 = ${5 * 7}<br />${5} * 8 = ${5 * 8}<br />${5} * 9 = ${5 * 9}<br />${5} * 10 = ${5 * 10}<br />`);
//}

//6. Take
// a) Take three subjects name from user and store them in 3 
// different variables.
// b) Total marks for each subject is 100, store it in another 
// variable.
// c) Take obtained marks for first subject from user and 
// stored it in different variable.
// ALERTS | JAVASCRIPT
// Page 3 of 3
// d) Take obtained marks for remaining 2 subjects from user 
// and store them in variables.
// e) Now calculate total marks and percentage and show the 
// result in browser like this.(Hint: user table)

// var sub_1 = prompt("Enter First Subject: ") || "Physics";
// var sub_2 = prompt("Enter Second Subject: ") || "Mathematics";
// var sub_3 = prompt("Enter Third Subject: ") || "English";
// //For Capitalizing:
//     var alt_1 = sub_1[0];
//     capitalize_1 = alt_1.toUpperCase();
//     sub_1 = sub_1.replace(alt_1, capitalize_1);
//     var alt_2 = sub_2[0];
//     capitalize_2 = alt_2.toUpperCase();
//     sub_2 = sub_2.replace(alt_2, capitalize_2);
//     var alt_3 = sub_3[0];
//     capitalize_3 = alt_3.toUpperCase();
//     sub_3 = sub_3.replace(alt_3, capitalize_3);


// var total_marks = 100;
// var mark_1 = +prompt(`Enter ${sub_1} Marks: `);
// var mark_2 = +prompt(`Enter ${sub_2} Marks: `);
// var mark_3 = +prompt(`Enter ${sub_3} Marks: `);
// var per_1 = Math.round((mark_1 * 100) / total_marks);
// var per_2 = Math.round((mark_2 * 100) / total_marks);
// var per_3 = Math.round((mark_3 * 100) / total_marks);
// document.write(`<table style="text-align: center;" border="3">
// <thead>
//     <tr>
//         <th>Subject</th>
//         <th>Total Marks</th>
//         <th>Obtained Marks</th>
//         <th>Percentage(%)</th>
//     </tr>
// </thead>
// <tbody>
//     <tr>
//         <td>${sub_1}</td>
//         <td>${total_marks}</td>
//         <td>${mark_1}</td>
//         <td>${per_1}%</td>
//     </tr>
//     <tr>
//         <td>${sub_2}</td>
//         <td>${total_marks}</td>
//         <td>${mark_2}</td>
//         <td>${per_2}%</td>
//     </tr>
//     <tr>
//         <td>${sub_3}</td>
//         <td>${total_marks}</td>
//         <td>${mark_3}</td>
//         <td>${per_3}%</td>
//     </tr>
//     <tr>
//         <td style="font-weight: bold;">Overall</td>
//         <td>${total_marks * 3}</td>
//         <td>${mark_1 + mark_2 + mark_3}</td>
//         <td>${(per_1 + per_2 + per_3) / 3}%</td>
//     </tr>
// </tbody></table>`);