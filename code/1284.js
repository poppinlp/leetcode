const minFlips = mat => {
  const BIT = [0, 1, 2, 4, 8, 16, 32, 64, 128, 256];
  const row = mat.length;
  const col = mat[0].length;
  const total = row * col;

  let initVal = 0;
  for (let i = 0; i < row; ++i) {
    for (let j = 0; j < col; ++j) {
      initVal = (initVal << 1) + mat[i][j];
    }
  }

  if (initVal === 0) return 0;

  const visited = new Set([initVal]);
  let queue = [initVal];
  let step = 0;

  while (queue.length) {
    const next = [];
    ++step;
    for (let i = 0; i < queue.length; ++i) {
      for (let x = 0; x < row; ++x) {
        for (let y = 0; y < col; ++y) {
          const diff = total - x * col - y;
          let fliped = queue[i] ^ BIT[diff];
          x > 0 && (fliped ^= BIT[diff + col]);
          x < row - 1 && (fliped ^= BIT[diff -col]);
          y > 0 && (fliped ^= BIT[diff + 1]);
          y < col - 1 && (fliped ^= BIT[diff - 1]);
          if (fliped === 0) return step;
          if (visited.has(fliped)) continue;
          visited.add(fliped);
          next.push(fliped)
        }
      }
    }
    queue = next;
  }

  return -1;
};

[
  [[0,0],[0,1]],
  [[0]],
  [[1,1,1],[1,0,1],[0,0,0]],
  [[1,0,0],[1,0,0]],
].forEach(data => {
  console.log(minFlips(data));
});