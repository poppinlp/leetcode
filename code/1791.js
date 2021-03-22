const findCenter = (edges) => {
  const [[a, b], [c, d]] = edges;
  return a === c || b === c ? c : d;
};

const findCenter = (edges) => {
  return edges[1][0] === edges[0][0] || edges[1][0] === edges[0][1] ? edges[1][0] : edges[1][1];
};
