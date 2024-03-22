//13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they 
// were stored. (FIFO-First In First Out)

var fifoArray = [];
fifoArray.push("Keyboard<br />"); 
fifoArray.push("Mouse<br />"); 
fifoArray.push("Monitor"); 

document.write(fifoArray[0]); 
document.write(fifoArray[1]); 

var firstElement = fifoArray.shift(); 

document.write(firstElement); 
document.write(fifoArray); 


