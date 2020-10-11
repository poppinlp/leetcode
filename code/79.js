const exist = (board, word) => {
  for (let i = 0; i < board.length; ++i) {
    for (let j = 0; j < board[i].length; ++j) {
      if (board[i][j] === word[0] && helper(i, j, 0)) return true;
    }
  }
  return false;

  function helper(i, j, target) {
    if (target === word.length) return true;
    if (i < 0 || j < 0 || i >= board.length || j >= board[0].length) return false;
    if (board[i][j] !== word[target]) return false;
    const tmp = board[i][j];
    board[i][j] = '~';
    if (
      helper(i + 1, j, target + 1) ||
      helper(i - 1, j, target + 1) ||
      helper(i, j + 1, target + 1) ||
      helper(i, j - 1, target + 1)
    ) return true;
    board[i][j] = tmp;
  }
};