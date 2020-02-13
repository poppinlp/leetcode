const minDifficulty = (jobDifficulty, d) => {
  const LEN = jobDifficulty.length;
  if (LEN < d) return -1;
  const cache = new Map();
  return helper(0, d);

  function helper(idx, count) {
    const key = idx * 100 + count;
    if (!cache.has(key)) {
      if (count === 1) {
        let max = 0;
        for (let i = idx; i < LEN; ++i) {
          jobDifficulty[i] > max && (max = jobDifficulty[i]);
        }
        return max;
      }
      let min = 10000;
      let curMax = 0;
      for (let i = idx; i <= LEN - count; ++i) {
        if (jobDifficulty[i] > curMax) curMax = jobDifficulty[i];
        min = Math.min(min, curMax + helper(i + 1, count - 1));
      }
      cache.set(key, min);
    }
    return cache.get(key);
  }
};

const minDifficulty = (jobDifficulty, d) => {
  const LEN = jobDifficulty.length;
  if (LEN < d) return -1;
  const dp = Array.from({ length: LEN }, () => new Uint16Array(d + 1).fill(10000));

  for (let i = LEN - 1, curMax = 0; i >= 0; --i) {
    jobDifficulty[i] > curMax && (curMax = jobDifficulty[i]);
    dp[i][1] = curMax;
  }

  for (let i = 2; i <= d; ++i) {
    for (let j = 0; j <= LEN - i; ++j) {
      let max = 0;
      for (let k = j; k <= LEN - i; ++k) {
        jobDifficulty[k] > max && (max = jobDifficulty[k]);
        dp[j][i] = Math.min(dp[j][i], dp[k + 1][i - 1] + max);
      }
    }
  }

  return dp[0][d];
};

const minDifficulty = (jobDifficulty, d) => {
  const LEN = jobDifficulty.length;
  if (LEN < d) return -1;
  const dp = new Uint16Array(LEN + 1);

  for (let i = LEN - 1; i >= 0; --i) {
    dp[i] = jobDifficulty[i] > dp[i + 1] ? jobDifficulty[i] : dp[i + 1];
  }

  for (let i = 2; i <= d; ++i) {
    for (let j = 0; j <= LEN - i; ++j) {
      let max = 0;
      dp[j] = 10000;
      for (let k = j; k <= LEN - i; ++k) {
        jobDifficulty[k] > max && (max = jobDifficulty[k]);
        dp[j] > dp[k + 1] + max && (dp[j] = dp[k + 1] + max);
      }
    }
  }

  return dp[0];
};

const minDifficulty = (jobDifficulty, d) => {
  const LEN = jobDifficulty.length;
  if (LEN < d) return -1;

  const dp = new Uint16Array(LEN);
  dp[0] = jobDifficulty[0];
  for (let i = 1; i < LEN; ++i) {
    dp[i] = jobDifficulty[i] > dp[i - 1] ? jobDifficulty[i] : dp[i - 1];
  }

  for (let i = 1; i < d; ++i) {
    const stack = [];
    let old = dp[i - 1];
    for (let j = i; j < LEN; ++j) {
      let min = old;
      old = dp[j];
      while (stack.length && jobDifficulty[stack[stack.length - 1]] <= jobDifficulty[j]) {
        const top = stack.pop();
        min = Math.min(min, dp[top] - jobDifficulty[top]);
      }
      dp[j] = min + jobDifficulty[j];
      if (stack.length) {
        const top = dp[stack[stack.length - 1]];
        top < dp[j] && (dp[j] = top);
      }
      stack.push(j);
    }
  }

  return dp[LEN - 1];
};
