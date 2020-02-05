const oddCells = (row, column, indices) => {
  const rowCount = new Uint8Array(row);
  const columnCount = new Uint8Array(column);
  for (let i = 0; i < indices.length; ++i) {
    ++rowCount[indices[i][0]];
    ++columnCount[indices[i][1]];
  }
  let ret = 0;
  for (let i = 0; i < rowCount.length; ++i) {
    for (let j = 0; j < columnCount.length; ++j) {
      ((rowCount[i] ^ columnCount[j]) & 1) === 1 && ++ret;
    }
  }
  return ret;
};