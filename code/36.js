const isValidSudoku = board => {
  const size = 9;
  const empty = '.';
  const boxSets = [
    [new Set(), new Set(), new Set()],
    [new Set(), new Set(), new Set()],
    [new Set(), new Set(), new Set()],
  ];

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const val = board[i][j];
      if (val === empty) continue;

      const iset = Math.floor(i / 3);
      const jset = Math.floor(j / 3);
      if (boxSets[iset][jset].has(val)) return false;
      if ((validCol(i, j) && validRow(i, j)) === false) return false;
      boxSets[iset][jset].add(val);
    }
  }

  return true;

  function validCol(i, j) {
    const target = board[i][j];
    for (let n = i + 1; n < size; n++) {
      if (board[n][j] === target) return false;
    }
    return true;
  }
  function validRow(i, j) {
    const target = board[i][j];
    for (let n = j + 1; n < size; n++) {
      if (board[i][n] === target) return false;
    }
    return true;
  }
};