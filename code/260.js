const singleNumber = (nums) => {
  const set = new Set();
  for (const val of nums) {
    set.has(val) ? set.delete(val) : set.add(val);
  }
  return Array.from(set);
};

const singleNumber = (nums) => {
  const set = new Set();
  for (const val of nums) {
    set.has(val) ? set.delete(val) : set.add(val);
  }
  return Array.from(set);
};