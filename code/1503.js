const getLastMoment = (n, left, right) => {
  const LEFT = 2 ** 0;
  const RIGHT = 2 ** 1;
  const plank = new Uint8Array(n + 1);
  for (const val of left) plank[val] ^= LEFT;
  for (const val of right) plank[val] ^= RIGHT;
  let t = -1;
  let ants = left.length + right.length;
  while (ants > 0) {
    if (plank[0] & LEFT) { plank[0] ^= LEFT; --ants; }
    if (plank[n] & RIGHT) { plank[n] ^= RIGHT; --ants; }
    for (let i = 1; i <= n; ++i) {
      if (plank[i] & LEFT) { plank[i - 1] ^= LEFT; plank[i] ^= LEFT; }
      if (plank[n - i] & RIGHT) { plank[n - i + 1] ^= RIGHT; plank[n - i] ^= RIGHT; }
    }
    ++t;
  }
  return t;
};

const getLastMoment = (n, left, right) => {
  let max = 0;
  for (const val of left) {
    val > max && (max = val);
  }
  for (const val of right) {
    n - val > max && (max = n - val);
  }
  return max;
}
