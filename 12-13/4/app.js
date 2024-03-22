//4. Write a program that takes a character (i.e. string of 
// length 1) and returns true if it is a vowel, false otherwise

function isVowel(char) {
    char = char.toLowerCase();
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
        return true;
    } else {
        return false;
    }
}
document.write(isVowel("a")); 
document.write(isVowel("b")); 





