//11. Write a program to initialize an array with city names. 
// Copy 3 array elements from cities array to selectedCities 
// array.

var cities = ['New York', 'London', 'Tokyo', 'Paris', 'Sydney<br />'];
document.write(cities)
var selectedCities = [];
selectedCities = cities.slice(0, 3);
document.write(selectedCities);


