const arrangeCoins = (n) => {
  let result = 0;
  while (n >= 0) {
    n -= ++result;
  }
  return result - 1;
};

const arrangeCoins = (n, left = 0, right = n) => {
  if (left >= right) return left;
  const mid = (left + right) >> 1;
  return (mid * (mid + 1) / 2) > n ? arrangeCoins(n, left, mid - 1) : arrangeCoins(n, mid, right);
};

const arrangeCoins = (n) => (Math.sqrt(2 * n + 0.25) - 0.5) >> 0;