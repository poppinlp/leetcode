const memo = new Uint8Array(10000);
const helper = x => {
  if (memo[x] !== 0) return memo[x] === 1;
  while (x > 0) {
    if (x % 10 === 0) { memo[x] = 2; return false; }
    x = x / 10 << 0;
  }
  memo[x] = 1;
  return true;
};
const getNoZeroIntegers = n => {
  let m = 0;
  while (n--) {
    if (helper(++m) && helper(n)) return [m, n];
  }
};

const helper = x => {
  let digit = 0;
  while (x > 0) {
    if (x % 10 === 0) break;
    x = x / 10 << 0;
    ++digit;
  }
  return digit;
};
const getNoZeroIntegers = n => {
  let x = 1, y = n - 1;
  while (true) {
    let num = 10 ** helper(y);
    if (num < y) {
      y -= num;
      x += num;
      continue;
    }
    num = 10 ** helper(x);
    if (num > x) break;
    y -= num;
    x += num;
  }
  return [x, y];
};