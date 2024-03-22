//9. Initialize an array with color names. Display the array
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


var colors = ['Red', 'Green', 'Blue'];
document.write(colors);

var newColorStart = prompt('Enter a color to add to the beginning:');
colors.unshift(newColorStart);
document.write(colors);

var newColorEnd = prompt('Enter a color to add to the end:');
colors.push(newColorEnd);
document.write(colors);

colors.unshift('Yellow', 'Purple');
document.write(colors);


colors.shift();
document.write(colors);

colors.pop();
document.write(colors);

var index = prompt('Enter the index to add color:');
var color = prompt('Enter the color to add:');
colors.splice(index, 0, color);
document.write(colors);

var deleteIndex = prompt('Enter the index to delete color(s):');
var deleteCount = prompt('Enter the number of colors to delete:');
colors.splice(deleteIndex, deleteCount);
document.write(colors);

