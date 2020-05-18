const equalSubstring = (s, t, maxCost) => {
  let max = 0;
  for (let left = -1, right = 0; right < s.length; ++right) {
    maxCost -= Math.abs(s.charCodeAt(right) - t.charCodeAt(right));
    if (maxCost >= 0) {
      right - left > max && (max = right - left);
    } else {
      while (maxCost < 0) {
        ++left;
        maxCost += Math.abs(s.charCodeAt(left) - t.charCodeAt(left));
      }
    }
  }
  return max;
};

const equalSubstring = (s, t, maxCost) => {
  let left = -1;
  for (let right = 0; right < s.length; ++right) {
    maxCost -= Math.abs(s.charCodeAt(right) - t.charCodeAt(right));
    if (maxCost < 0) {
      ++left;
      maxCost += Math.abs(s.charCodeAt(left) - t.charCodeAt(left));
    }
  }
  return s.length - left - 1;
};
