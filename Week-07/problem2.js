// Problem 6.2 Spiral Order Matrix II
// Problem Description Given a matrix of m * n elements (m rows, n columns),
// return all elements of the matrix in spiral order.
// Example: Given the following
// matrix: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
// You should return[1, 2, 3, 6, 9, 8, 7, 4, 5]

const spiralMatrix = (matrix) => {
  let row = matrix.length;
  let col = matrix[0].length;
  let top = 0;
  let bottom = row - 1;
  let left = 0;
  let right = col - 1;
  let spiral = [];

  let dir = 0;

  while (top <= bottom && left <= right) {
    //# moving left->right
    if (dir === 0) {
      for (let i = left; i <= right; i++) {
        spiral.push(matrix[top][i]);
      }

      // # row, move down to the next row.
      top += 1;
      dir = 1;
    }

    //# moving top->bottom
    else if (dir === 1) {
      for (let i = top; i <= bottom; i++) {
        spiral.push(matrix[i][right]);
      }

      right -= 1;
      dir = 2;
    }

    // # moving right->left
    else if (dir === 2) {
      for (let i = right; i >= left; i--) {
        spiral.push(matrix[bottom][i]);
      }

      dir = 3;
      bottom -= 1;
    }

    // # moving bottom->top
    else if (dir === 3) {
      for (let i = bottom; i >= top; i--) {
        spiral.push(matrix[i][left]);
      }

      dir = 0;
      left += 1;
    }
  }

  return spiral;
};

var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

var matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

console.log(spiralMatrix(matrix));
