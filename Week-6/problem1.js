// Problem 6.2 Spiral Order Matrix II
// Problem Description Given a matrix of m * n elements (m rows, n columns),
// return all elements of the matrix in spiral order.
// Example: Given the following
// matrix: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
// You should return[1, 2, 3, 6, 9, 8, 7, 4, 5]

const spiralMatrix = (matrix) => {
  let spiral = [];
  
  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i]);
    if (i==0){
        spiral = [...spiral,...matrix[i]]
    }
  }
  return spiral;
};

var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(spiralMatrix(matrix));
