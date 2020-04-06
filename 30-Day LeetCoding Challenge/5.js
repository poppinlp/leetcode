const maxProfit = prices => {
  let profit = 0;
  for (let i = 1; i < prices.length; ++i) {
    const val = prices[i] - prices[i - 1];
    val > 0 && (profit += val);
  }
  return profit;
};

const maxProfit = prices => prices.reduce((prev, cur, curIdx) => cur - prices[curIdx - 1] > 0 ? prev + cur - prices[curIdx - 1] : prev, 0);
