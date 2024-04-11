//1. Declare and initialize an empty multidimensional array.
// (Array of arrays)
// let arr_multi = [[], [], []];

//2. Declare and initialize a multidimensional array 
// representing the following matrix:
// var arr_dimension = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];

//3. Write a program to print numeric counting from 1 to 10.
// var arr_count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (var h of arr_count){
//     document.write(h + "<br>");
// }

//4. Write a program to print multiplication table of any 
// number using for loop. Table number & length should be 
// taken as an input from user.
// var num_table = +prompt("Enter a number to show its table: ");
// var length_table = +prompt("Enter Lenght of Table (e.g. 10): ");
// for (var i = 1 ;i < length_table + 1; i++){
//     document.write(`${num_table} * ${i} = ${num_table * i}<br>`);
// }

//5. Write a program to print items of the following array 
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, 
// “strawberry”]
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (var i in fruits){
//     document.write(`Element at index ${i} is ${fruits[i]}<br>`);
// }

//6. Generate the following series in your browser. See 
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
// document.write("Counting: <br>")
// for (var i=1; i<16; i++){
//     if (i < 15){
//         document.write(i + ", ")
//     }
//     else{
//         document.write(i)
//     }
// }

// document.write("<br><br>Reverse Counting: <br>")
// for (var i=16; i>0; i--){
//     if (i > 1){
//         document.write(i + ", ")
//     }
//     else{
//         document.write(i)
//     }
// }

// document.write("<br><br>Even: <br>")
// for (var i=0; i<21; i++){
//     if (i % 2 === 0){
//         if (i < 20){
//             document.write(i + ", ")
//         }
//         else{
//             document.write(i)
//         }
//     }
// }


// document.write("<br><br>Odd: <br>")
// for (var i=0; i<21; i++){
//     if (i % 2 !== 0){
//         if (i < 19){
//             document.write(i + ", ")
//         }
//         else{
//             document.write(i)
//         }
//     }
// }


// document.write("<br><br>Series: <br>")
// for (var i=2; i<21; i++){
//     if (i % 2 === 0){
//         if (i < 20){
//             document.write(i + "K, ")
//         }
//         else{
//             document.write(i + "K")
//         }
//     }
// }



//7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an 
// array.
// After searching, prompt the user whether the given item is
// found in the list or not.
// var a = ["cake", "apple pie", "cookie", "chips", "patties"];
// var counts = 0;
// var search = prompt("Welcome to my Bake Shop! What do you want to order? ");
// for (var i in a){
//     counts++;
//     if (search === a[i]){
//         document.write(`${search} is available at index ${i} in my Bake Shop.`)
//         break;
//     }
//     else if(counts === a.length){
//         alert(`We are sorry ${search} is not available!`)
//     }
// }


//8. Write a program to identify the largest number in the 
// given array.
// A = [24, 53, 78, 91, 12].
// var arr_large = [24, 53, 78, 91, 120];
// var min = arr_large[0]
// for (var i of arr_large){
//     if (min < i){
//         min = i;
//     }
// }

// alert("Largest No is " + min);


//9. Write a program to identify the smallest number in the 
// given array.
// A = [24, 53, 78, 91, 12]
// var arr_large = [24, 53, 78, 91, 120];
// var min = arr_large[0]
// for (var i of arr_large){
//     if (min > i){
//         min = i;
//     }
// }

// alert("Smallest No is " + min);


//10. Write a program to print multiples of 5 ranging 1 to 
// 100.
// for (var u=1; u<101;u++){
//     if (u % 5 === 0){
//         if (u < 100){
//             document.write(u + " ,");
//         }
//         else{
//             document.write(u);
//         }
//     }
// }