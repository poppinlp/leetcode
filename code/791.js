const customSortString = (order, str) => {
  const map = new Map();
  let other = "";
  let prefix = "";
  for (let char of s) map.set(char, 0);
  for (let char of t) {
    if (!map.has(char)) { other += char; continue; }
    map.set(char, map.get(char) + 1);
  }
  for (let [char, count] of map.entries()) {
    prefix += char.repeat(count);
  }
  return prefix + other;
};
