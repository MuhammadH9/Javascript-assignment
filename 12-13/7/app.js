//7. Write a program that takes time as input from user in 24 
// hours clock format like: 1900 = 7pm. Implement the 
// following case using if, else & else if statements


//  input
var inputTime = prompt("Enter the time in 24-hour clock format (e.g., 1900 for 7 PM):");


var time = parseInt(inputTime);

// Implement if, else if, else statements
if (time >= 0 && time < 1200) {
    document.write("Time in 12-hour clock format: " + time + " AM");
} else if (time >= 1200 && time < 2400) {
    var twelveHourFormat = time - 1200;
    if (twelveHourFormat === 0) {
        document.write("Time in 12-hour clock format: 12 PM");
    } else {
        document.write("Time in 12-hour clock format: " + twelveHourFormat + " PM");
    }
} else {
    document.write("Invalid input. Please enter a time between 0 and 2359.");
}





