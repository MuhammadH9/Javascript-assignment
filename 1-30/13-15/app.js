// 1. Declare an empty array using JS literal notation to store
// student names in future.
// var arr_1 = [];

// 2. Declare an empty array using JS object notation to store
// student names in future.
// var arr_2 = new Array();

// 3. Declare and initialize a strings array.
// var arr_3 = ["Ibrar", "aman", "Nadim"];

// 4. Declare and initialize a numbers array.
// var arr_4 = [1, 2, 3, 4, 5];

// 5. Declare and initialize a boolean array.
// var arr_5 = [true, false, true, false];

// 6. Declare and initialize a mixed array.
// var arr_6 = [1, 2, "Ibrar", "Nadim", true, false];

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:
// var arr_7 = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];
// function interate(array){
//     for (var j of array){
//         document.write(j + "<br />");
//     }
// }

// interate(arr_7);


// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:
// var arr_8 = ["Ibrahim", "Usman", "Naveed"];
// var arr_9 = [380, 490, 485];
// document.write(`Score of ${arr_8[0]} is ${arr_9[0]}. Percentage is ${(arr_9[0] * 100) / 500}%<br />Score of ${arr_8[1]} is ${arr_9[1]}. Percentage is ${(arr_9[1] * 100) / 500}%<br>Score of ${arr_8[2]} is ${arr_9[2]}. Percentage is ${(arr_9[2] * 100) / 500}%`);

// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.
// var arr_color = ["red", "blue"];
// for (var i of arr_color){
//     document.write(i + "<br />");
// }

// var add_1 = prompt("Which color you want to add to the beginning: ");
// arr_color.unshift(add_1);
// document.write("----------------------------------<br />")
// for (var j of arr_color){
//     document.write(j + "<br />");
// }

// var add_2 = prompt("Which color you want to add to the end: ");
// arr_color.push(add_2);
// document.write("----------------------------------<br />")
// for (var k of arr_color){
//     document.write(k + "<br />");
// }


// var add_3 = prompt("Which color you want to add to the beginning: ");
// var add_4 = prompt("Which color you want to add to the beginning: ");
// arr_color.unshift(add_3, add_4);
// document.write("----------------------------------<br />")
// for (var l of arr_color){
//     document.write(l + "<br />");
// }

// arr_color.shift();
// document.write("----------------------------------<br />")
// for (var m of arr_color){
//     document.write(m + "<br />");
// }

// arr_color.pop();
// document.write("----------------------------------<br />")
// for (var n of arr_color){
//     document.write(n + "<br />");
// }

// var add_5 = prompt("Which color you want to add: ");
// var add_6 = +prompt(`Also tell the index no (0-${arr_color.length-1}): `);
// arr_color.splice(add_6, 0, add_5);
// document.write("----------------------------------<br />")
// for (var o of arr_color){
//     document.write(o + "<br />");
// }

// var add_7 = +prompt(`How many colors you want to delete (${arr_color.length}): `);
// var add_8 = +prompt(`Also tell the index no (0-${arr_color.length-1}): `);
// arr_color.splice(add_8, add_7);
// document.write("----------------------------------<br />")
// for (var p of arr_color){
//     document.write(p + "<br />");
// }


// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.
// var arr_score = [90, 80, 70, 99, 100];
// arr_score.sort(function(a, b){return a-b});
// console.log(arr_score);

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.
// var arr_city = ["Karachi", "Lahore", "Quetta"];
// var arr_copy = arr_city.slice(1, 3);
// console.log(arr_copy);

// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)
// var arr_join = ["This", "is", "my", "cat"];
// console.log(arr_join.join(" "));

// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)
// var arr_app = [];
// arr_app.push("keyboard");
// arr_app.push("mouse");
// arr_app.push("printer");
// arr_app.push("monitor");
// console.log(arr_app);

// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)
// var arr_rev = [];
// arr_rev.unshift("keyboard");
// arr_rev.unshift("mouse");
// arr_rev.unshift("printer");
// arr_rev.unshift("monitor");
// console.log(arr_rev);

// 15. Write a program to store phone manufacturers (Apple,
// Samsung, Motorola, Nokia, Sony & Haier) in an array.
// Display the following dropdown/select menu in your
// browser using document.write() method:
// var arr_comp = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write(`<select><option>Phone Manufacturers</option><option value="Apple">${arr_comp[0]}</option><option value="Samsung">${arr_comp[1]}</option><option value="Motorola">${arr_comp[2]}</option><option value="Nokia">${arr_comp[3]}</option><option value="Sony">${arr_comp[4]}</option><option value="Haier">${arr_comp[5]}</option></select>`);
