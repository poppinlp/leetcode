const change = (amount, coins) => {
  let count = 0;
  dfs(amount, coins.length - 1);
  return count;

  function dfs(val, startIdx) {
    if (val === 0) { ++count; return; }
    for (let i = startIdx; i >= 0; --i) {
      if (coins[i] <= val) {
        dfs(val - coins[i], i);
      }
    }
  }
};

console.log(change(500, [3,5,7,8,9,10,11]))