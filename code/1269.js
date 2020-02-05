const numWays = (steps, arrLen) => {
  const MOD = 1000000007;
  let count = 1;
  let prev = 1;
  while (steps > 1 && arrLen > 0) {
    --arrLen;
    steps -= 2;
    const cur = (1 + steps + 1) * (steps + 1) / 2;
    count = (count + cur * prev) % MOD;
    prev = cur;
  }
  return count;
};

[
  [3,2],
  [2,4],
  [4,2]
].forEach(data => {
  console.log(Reflect.apply(numWays, null, data));
});