const maxScore = (s) => {
  const LEN = s.length;
  const score = new Uint16Array(LEN);
  for (let i = 0, v = 0; i < LEN; ++i) {
    s[i] === "0" && ++v;
    score[i] = v;
  }
  let max = 0;
  for (let i = LEN - 1, v = 0; i >= 0; --i) {
    s[i] === "1" && ++v;
    score[i - 1] + v > max && (max = score[i - 1] + v);
  }
  return max;
};

const maxScore = (s) => {
  const LEN = s.length;
  for (let i = 0, left = 0, right = LEN; i < LEN; ++i) {
    s[i] === '0' ? ++left : --right;
  }
  return max;
};

