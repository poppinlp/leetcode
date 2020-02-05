/*
const closedIsland = grid => {
  const rlen = grid.length - 1;
  const clen = grid[0].length - 1;
  const visited = new Set();
  const islandList = [];
  const islandState = {};
  for (let i = 0; i <= rlen; ++i) {
    for (let j = 0; j <= clen; ++j) {
      dfs(i, j, i * clen + i + j);
    }
  }
  let count = 0;
  for (let i = 0; i < islandList.length; ++i) {
    islandState[islandList[i]] === false && ++count;
  }
  return count;

  function dfs(x, y, group) {
    if (grid[x][y] === 1) return;
    const key = x * clen + x + y;
    if (visited.has(key)) return;
    visited.add(key);
    const isOpen = x === 0 || y === 0 || x === rlen || y === clen;
    if (islandState[group] === undefined) { islandList.push(group); islandState[group] = isOpen; }
    if (isOpen === true) { islandState[group] = isOpen; }
    y > 0 && dfs(x, y - 1, group);
    x > 0 && dfs(x - 1, y, group);
    y < clen && dfs(x, y + 1, group);
    x < rlen && dfs(x + 1, y, group);
  }
};
*/
const closedIsland = grid => {
  const rlen = grid.length - 1;
  const clen = grid[0].length - 1;
  let count = 0;
  for (let i = 0; i <= clen; ++i) { fill(0, i); fill(rlen, i); }
  for (let i = 1; i < rlen; ++i) { fill(i, 0); fill(i, clen); }
  for (let i = 1; i < rlen; ++i) {
    for (let j = 1; j < clen; ++j) {
      grid[i][j] === 0 && ++count;
      fill(i, j);
    }
  }
  return count;

  function fill(x, y) {
    if (x < 0 || y < 0 || x > rlen || y > clen || grid[x][y] === 1) return;
    grid[x][y] = 1;
    fill(x, y - 1);
    fill(x - 1, y);
    fill(x, y + 1);
    fill(x + 1, y);
  }
};

[
  [
    [1, 1, 1, 1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0, 1, 1, 0],
    [1, 0, 1, 0, 1, 1, 1, 0],
    [1, 0, 0, 0, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 0]
  ],
  [
    [0, 0, 1, 0, 0],
    [0, 1, 0, 1, 0],
    [0, 1, 1, 1, 0]
  ],
  [
    [1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1]
  ]
].forEach(data => {
  console.log(closedIsland(data));
});
