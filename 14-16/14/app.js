//14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-First Out)

var las = [];

las.push(1); 
las.push(2); 
las.push(3); 

while (las.length > 0) {
    var poppedValue = las.pop(); 
    document.write(poppedValue);
}

