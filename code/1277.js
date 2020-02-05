/* const countSquares = matrix => {
  const row = matrix.length;
  const col = matrix[0].length;
  let count = 0;
  for (let x = 0; x < row; ++x) {
    for (let y = 0; y < col; ++y) {
      checkMatrix: for (let i = 0; x + i < row && y + i < col; ++i, ++count) {
        for (let j = 0; j <= i; ++j) {
          if (matrix[x + i][y + j] === 0 || matrix[x + j][y + i] === 0) break checkMatrix;
        }
      }
    }
  }
  return count;
}; */

const countSquares = matrix => {
  let count = 0;
  for (let i = 0; i < matrix.length; ++i) {
    for (let j = 0; j < matrix[0].length; ++j) {
      if (matrix[i][j] === 0) continue;
      if (i > 0 && j > 0) {
        matrix[i][j] += Math.min(matrix[i - 1][j], matrix[i][j - 1], matrix[i - 1][j - 1]);
      }
      count += matrix[i][j];
    }
  }
  return count;
};

console.log(
  countSquares([
    [1, 0, 1],
    [1, 1, 0],
    [1, 1, 0]
  ])
);