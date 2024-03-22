//8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students. 
// Assume that total marks are 500 for each student, display 
// the scores & percentages of students like:

var studentNames = ["Alice", "Bob", "Charlie"];
var studentScores = [430, 380, 450]; 

var totalMarks = 500;
var studentPercentages = studentScores.map(score => (score / totalMarks) * 100);

for (var i = 0; i < studentNames.length; i++) {
    document.write(`${studentNames[i]} scored ${studentScores[i]}. Percentage: ${studentPercentages[i]}%`);
}


