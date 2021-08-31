const maxCount = (m, n, ops) => {
  let minx = m;
  let miny = n;

  for (const op of ops) {
    op[0] < minx && (minx = op[0]);
    op[1] < miny && (miny = op[1]);
  }

  return minx * miny;
};

const maxCount = (m, n, ops) => ops.reduce((prev, op) => (
  m > op[0] && (m = op[0]),
  n > op[1] && (n = op[1]),
  m * n
), m * n);

