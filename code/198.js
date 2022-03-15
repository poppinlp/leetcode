const rob = (nums) => {
  const LEN = nums.length;
  const dp = Array.from({ length: LEN }, () => new Uint16Array(LEN));
  for (let i = 0; i < LEN; ++i) {
    dp[i][i] = nums[i];
  }
  for (let gap = 1; gap < LEN; ++gap) {
    for (let i = 0; i < LEN - gap; ++i) {
      let max = Math.max(dp[i][i + gap - 1], dp[i + 1][i + gap], );
      for (let j = i + 1; j < i + gap - 1; ++j) {
        max = Math.max(max, dp[i][j - 1] + dp[j + 1][i + gap]);
      }
      dp[i][i + gap] = max;
    }
  }
  console.table(dp);
  return dp[0][LEN - 1];
};

console.log(rob([2, 7, 9, 3, 1]));
