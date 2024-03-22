//1.  Write a program that takes a character (number or string) 
// in a variable & checks whether the given input is a 
// number, uppercase letter or lower case letter. (Hint: ASCII 
// codes:- A=65, Z=90, a=97, z=122).

// user input
let input = prompt("Enter a character:");

//  number
if (!isNaN(input)) {
    document.write("Input is a number.");
} else {
    let charCode = input.charCodeAt(0);

    //  uppercase letter
    if (charCode >= 65 && charCode <= 90) {
        document.write("Input is an uppercase letter.");
    }
    //  lowercase letter
    else if (charCode >= 97 && charCode <= 122) {
        document.write("Input is a lowercase letter.");
    } else {
        document.write("Input is neither a number nor a letter.");
    }
}







