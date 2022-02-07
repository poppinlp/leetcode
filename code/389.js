const findTheDifference = (s, t) => {
  const map = {};
  for (const c of s) {
    map[c] = (map[c] || 0) + 1;
  }
  for (const c of t) {
    if (!map[c]--) return c;
  }
};