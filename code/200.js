// dfs
const numIslands = (grid) => {
  const ROW = grid.length - 1;
  const COL = grid[0].length - 1;
  const ISLAND = "1";
  const WATER = "0";
  let ret = 0;

  const dfs = (i, j) => {
    grid[i][j] = WATER;
    i > 0 && grid[i - 1][j] === ISLAND && helper(i - 1, j);
    i < ROW && grid[i + 1][j] === ISLAND && helper(i + 1, j);
    j > 0 && grid[i][j - 1] === ISLAND && helper(i, j - 1);
    j < COL && grid[i][j + 1] === ISLAND && helper(i, j + 1);
  };

  for (let i = 0; i <= ROW; ++i) {
    for (let j = 0; j <= COL; ++j) {
      if (grid[i][j] === WATER) continue;
      ++ret;
      dfs(i, j);
    }
  }

  return ret;
};

// bfs
const numIslands = grid => {
  const ROW = grid.length - 1;
  const COL = grid[0].length - 1;
  const ISLAND = "1";
  const WATER = "0";
  let ret = 0;

  const bfs = (i, j) => {
    const queue = [[i, j]];
    while (queue.length) {
      const [i, j] = queue.pop();
      grid[i][j] = WATER;
      i > 0 && grid[i - 1][j] === ISLAND && queue.push([i - 1, j]);
      i < ROW && grid[i + 1][j] === ISLAND && queue.push([i + 1, j]);
      j > 0 && grid[i][j - 1] === ISLAND && queue.push([i, j - 1]);
      j < COL && grid[i][j + 1] === ISLAND && queue.push([i, j + 1]);
    }
  };

  for (let i = 0; i <= ROW; ++i) {
    for (let j = 0; j <= COL; ++j) {
      if (grid[i][j] === WATER) continue;
      ++ret;
      bfs(i, j);
    }
  }

  return ret;
};