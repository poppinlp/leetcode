const kLengthApart = (nums, k) => {
  let cur = k;
  for (const n of nums) {
    if (n === 0) { ++cur; continue; }
    if (cur < k) return false;
    cur = 0;
  }
  return true;
};
