const countServers = grid => {
  const col = new Uint8Array(grid[0].length);
  // const colOfSingle = new Uint8Array(grid.length);
  let sum = 0;
  for (let i = 0; i < grid.length; ++i) {
    let c = 0;
    let lastServer = 0;
    for (let j = 0; j < grid[0].length; ++j) {
      grid[i][j] === 1 && ++c && ++col[j] && (lastServer = j);
    }
    c > 1 && (sum += c);
    // c === 1 && (colOfSingle[i] = lastServer + 1);
    c === 1 && col[lastServer] > 1 && ++sum;
  }
  /*
  for (let i = 0; i < grid.length; ++i) {
    colOfSingle[i] > 0 && col[colOfSingle[i] - 1] > 1 && ++sum;
  }
  */
  return sum;
};

[
  // [[1,0],[0,1]],
  [[1,0],[1,1]],
  // [[1,1,0,0],[0,0,1,0],[0,0,1,0],[0,0,0,1]]
].forEach(data => {
  console.log(countServers(data));
});