const coinChange = (coins, amount) => {
  let ret = 0;
  coins.sort((a, b) => b - a);
  for (let i = 0; i < coins.length; ++i) {
    console.log(amount);
    if (coins[i] <= amount) { ret += amount / coins[i] >> 0; amount %= coins[i]; }
    console.log(coins[i], amount);
    if (amount === 0) return ret;
  }
  return -1;
};

console.log(coinChange([186,419,83,408], 6249))