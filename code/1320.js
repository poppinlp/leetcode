const minimumDistance = word => {
  const LEN = word.length;
  const dp = new Array(LEN - 1);
  const sum = new Uint16Array(LEN);

  for (let i = 1; i < LEN; ++i) {
    dp[i - 1] = new Uint16Array(LEN);
    sum[i] += sum[i - 1] + distance(i - 1, i);
  }

  for (let j = 2; j < LEN; ++j) {
    let min = sum[j - 1];
    for (let i = 0; i < j - 1; ++i) {
      const min2 = dp[i][j - 1] + distance(i, j);
      if (min2 < min) min = min2;
      dp[i][j] = dp[i][j - 1] + distance(j - 1, j);
    }
    dp[j - 1][j] = min;
  }

  let min = sum[LEN - 1];
  for (let i = 0; i < LEN - 1; ++i) {
    if (dp[i][LEN - 1] < min) min = dp[i][LEN - 1];
  }

  return min;

  function distance(a, b) {
    const x = word.charCodeAt(a) - 65;
    const y = word.charCodeAt(b) - 65;
    return Math.abs((x % 6) - (y % 6)) + Math.abs(((x / 6) << 0) - ((y / 6) << 0));
  }
};

const minimumDistance = word => {
  const LEN = word.length;
  const dp = new Uint16Array(LEN - 1);
  const sum = new Uint16Array(LEN);

  for (let i = 1; i < LEN; ++i) {
    sum[i] += sum[i - 1] + distance(i - 1, i);
  }

  for (let j = 2; j < LEN; ++j) {
    let min = sum[j - 1];
    for (let i = 0; i < j - 1; ++i) {
      const min2 = dp[i] + distance(i, j);
      dp[i] = dp[i] + distance(j - 1, j);
      if (min2 < min) min = min2;
    }
    dp[j - 1] = min;
  }

  return Math.min(...dp, sum[LEN - 1]);

  function distance(a, b) {
    const x = word.charCodeAt(a) - 65;
    const y = word.charCodeAt(b) - 65;
    return Math.abs((x % 6) - (y % 6)) + Math.abs(((x / 6) << 0) - ((y / 6) << 0));
  }
};

const minimumDistance = word => {
  const LEN = word.length;
  const dp = new Uint16Array(LEN - 1);
  let sum = 0

  for (let j = 2; j < LEN; ++j) {
    sum += distance(j - 2, j - 1);
    let min = sum;
    for (let i = 0; i < j - 1; ++i) {
      const min2 = dp[i] + distance(i, j);
      dp[i] = dp[i] + distance(j - 1, j);
      if (min2 < min) min = min2;
    }
    dp[j - 1] = min;
  }

  return Math.min(...dp, sum);

  function distance(a, b) {
    const x = word.charCodeAt(a) - 65;
    const y = word.charCodeAt(b) - 65;
    return Math.abs((x % 6) - (y % 6)) + Math.abs(((x / 6) << 0) - ((y / 6) << 0));
  }
};

[
// "CAKE",
// "HAPPY",
// "NEW",
// "YEAR",
// "LEETCODE",
// "ZKNB",
"ZKNBZ",
// "OPVUWZLCKTDPSUKGHAXIDWHLZFKNBDZEWHBSURTVCADUGTSDMCLDBTAGFWDPGXZBVARNTDICHCUJLNFBQOBTDWMGILXPSFWVGYBZVFFKQIDTOVFAPVNSQJULMVIERWAOXCKXBRI"
// ,"VGTCBCZIJRKDQHYFCNJJQESQUGRDNURMXYZIJOLSUEFDWDMMSOERVJLUPXNGPPWQKPUBOJEXPBTGALPMAQCVCVXVMALBDTAIUWJXHEYSJGDNOWKMFKNUVNEOWEQKEGFOLZMNZPMXHZGOGSWBMBHUCFLBXUVFHTJTCWQYJYLNOBUWQVURXNSOPIWPGKIBBBFLAJUA"
// ,"VSWYJVYGYQQKMIGDSKZHSVXRVLFEKXASBSELLJUJKPZMTNFAZESBOEKAXPVVYIXTGCRNIFQFCVUFSDQUZRTMYNIJJANYWIIRQRKKGWZNZEAYQEZVWZSMLOBRNUTZZYHALQFVGULUWPAXXHSHIFYNCSOHXWOQZZWDGFOCNUMIINYYLTKCJAPAYIGYMMN"
].forEach((data, idx) => {
  // console.time(idx);
  console.log(minimumDistance(data))
  // console.timeEnd(idx);
});