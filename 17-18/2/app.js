//2.Declare and initialize a multidimensional array representing the following matrix:
var matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
  ];
  var number = matrix[1][2]; 
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      document.write(matrix[i][j]);
    }
  }
    


