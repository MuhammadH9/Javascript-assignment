//1. Write a program that takes two user inputs for first and 
// last name using prompt and merge them in a new variable 
// titled fullName. Greet the user using his full name.
// var na_1 = prompt("Enter your First Name: ");
// var na_2 = prompt("Enter your Last Name: ");
// alert("Welcome! " + na_1 + " " + na_2);

//2. Write a program to take a user input about his favorite 
// mobile phone model. Find and display the length of user 
// input in your browser
// var fav_phone = prompt("My Favorite Mobile Phone is: ");
// alert(`Length of String: ${fav_phone.length}`);

//3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .
// var string_1 = "Pakistani";
// var count = 0;
// for (var i of string_1){
//     if (i === "n"){
//         alert(`Index of n: ${count}`);
//     }
//     count++;
// }

//4. Write a program to find the last index of letter “l” in the 
// word “Hello World” and display the result in your browser.
// var string_2 = "Hello World";
// var indexing = string_2.lastIndexOf("l");
// alert(`Last Index of l: ${indexing}`);

//5. Write a program to find the character at 3rd index in the 
// word “Pakistani” and display the result in your browser
// var string_3 = "Pakistani";
// alert(`Character at index 3: ${string_3.substring(3, 4)}`);

//6. Repeat Q1 using string concat() method.
// var queue_1 = prompt("Enter your First Name: ");
// var queue_2 = prompt("Enter your Last Name: ");
// alert(`Welcome! ${queue_1.concat(" " + queue_2)}`);

//7. Write a program to replace the “Hyder” to “Islam” in the 
// word “Hyderabad” and display the result in your browser.
// var city_name = 'Hyderabad';
// var replacement = city_name.replace("Hyder", "Islam");
// alert(replacement);

//8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and 
// football together.”;

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replacement_revisit = message.split(" ");
// var new_arr = [];
// for (var i of replacement_revisit){
//     if (i === "and"){
//         new_arr.push("&");
//     }
//     else{
//         new_arr.push(i);
//     }
// }
// alert(new_arr.join(" "));

//9. Write a program that converts a string “472” to a number 
// 472. Display the values & types in your browser.
// var string_4 = "472";
// var num_4 = +string_4;
// alert(`Value: ${string_4}\nType: ${typeof string_4}\nValue: ${num_4}\nType: ${typeof num_4}`);

//10. Write a program that takes user input. Convert and 
// show the input in capital letters.
// var lower = prompt("Enter a word in Lowercase: ");
// alert(`Upper Case: ${lower.toUpperCase()}`);

//11. Write a program that takes user input. Convert and 
// show the input in title case.
// var title = prompt("Enter a Word: ");
// var title_case = title[0].toUpperCase() + title.substring(1);
// alert(`Title Case: ${title_case}`);

//12. Write a program that converts the variable num to 
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.
// var num = 35.36;
// var string_5 = num + "";
// var arr = [];
// for (var i of string_5){
//     if (i >= 0 && i < 10){
//         arr.push(i);
//     }
// }

// alert(`Result: ${arr.join("")}`);


//13. Write a program to take user input and store username 
// in a variable. If the username contains any special symbol 
// among [@ . , !], prompt the user to enter a valid username. 
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64
// var user = prompt("Enter Username: ");
// for (var i of user){
//     if (i.charCodeAt() === 33 || i.charCodeAt() === 44 || i.charCodeAt() === 46 || i.charCodeAt() === 64){
//         alert("Please! Enter a Valid Username.")
//     }
// }

//14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an 
// array. After searching, prompt the user whether the given 
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user 
// enters cookie, Cookie, COOKIE or coOkIE, program 
// should inform about its availability.
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var input_item = prompt("Welcome to Ibrahim's Bakery!\nWhat do you want to order? ").toLowerCase();
// for (var i in A){
//     if (A[i] === input_item){
//         alert(`${input_item} is available at index ${i}`);
//         break;
//     }
//     else if (i == "4"){
//         alert(`We are sorry, but there is no ${input_item} in our bakery!`);
//     }
// }


//15. Write a program to take password as an input from 
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.
// var pass = prompt("Enter Your Password: ");
// var count_1 = 0;
// var count_2 = 0;
// var avg_count = 0;
// if (pass.length < 6){
//     alert("Password should be atleast 6 characters long! ");
//     avg_count++;
// }

// else if (pass[0] >= 0 && pass[0] < 10){
//     alert('First Character cannot be a Number! ');
//     avg_count++;
// }

// else if(true){
//     for(var i of pass){
//         if ((i.charCodeAt() >= 65 && i.charCodeAt() <= 90) || (i.charCodeAt() >= 97 && i.charCodeAt() <= 122)){
//             count_1++;
//         }
//         if (i.charCodeAt() >= 48 && i.charCodeAt() <= 57){
//             count_2++;
//         }
//     }
//     if (count_1 < 1 || count_2 < 1){
//         alert("Password should contain atleast one Alphabet and one Number! ");
//         avg_count++;
//     }
// }

// if (avg_count === 0){
//     alert("Your Password is Correct! ");
// }

//16. Write a program to convert the following string to an 
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.
// var university = "University of Karachi";
// var spliting = university.split("");
// for (var i of spliting){
//     document.write(i + "<br>");
// }

//17. Write a program to display the last character of a user 
// input.
// var last = prompt("Enter a Country Name: ");
// alert(`Last Character is: ${last[last.length-1]}`);

//18. You have a string “The quick brown fox jumps over the 
// lazy dog”. Write a program to count number of 
// occurrences of word “the” in given string.
// var word = "The quick brown fox jumps over the lazy dog";
// var arr_10 = word.split(" ");
// var count = 0;
// for (var i of arr_10){
//     if (i.toLowerCase() === "the"){
//         count++;
//     }
// }
// alert(`There are ${count} occurences of the word "the"`);