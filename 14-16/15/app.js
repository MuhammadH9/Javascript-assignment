//15. Write a program to store phone manufacturers (Apple,
// Samsung, Motorola, Nokia, Sony & Haier) in an array. 
// Display the following dropdown/select menu in your 
// browser using document.write() method:

var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<select>");
phoneManufacturers.forEach(manufacturer => {
    document.write(`<option value="${manufacturer}">${manufacturer}</option>`);
});
document.write("</select>");

