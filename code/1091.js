// DFS
const shortestPathBinaryMatrix = (grid) => {
  const DIRECTIONS = [[0, 1], [0, -1], [1, 0], [-1, 0], [1, 1], [1, -1], [-1, 1], [-1, -1]];
  const MAX = Number.MAX_SAFE_INTEGER;
  const n = grid.length - 1;
  if (grid[0][0] === 1 || grid[n][n] === 1) return -1;
  const minLen = dfs(0, 0);
  return minLen === MAX ? -1 : minLen;

  function dfs(curX, curY, len = 1) {
    if (curX === n && curY === n) return len;
    return Math.min(...DIRECTIONS.map(([moveX, moveY]) => {
      const nextX = curX + moveX;
      const nextY = curY + moveY;
      if (!isValid(nextX, nextY)) return MAX;
      grid[nextX][nextY] = 1;
      const curLen = dfs(nextX, nextY, len + 1);
      grid[nextX][nextY] = 0;
      return curLen;
    }));
  }

  function isValid(x, y) {
    return x >= 0 && x <= n && y >= 0 && y <= n && grid[x][y] === 0;
  }
};

// BFS
const shortestPathBinaryMatrix = (grid) => {
};
