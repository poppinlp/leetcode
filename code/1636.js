const frequencySort = (nums) => {
  const freq = {};
  const result = [];
  for (const num of nums) {
    freq[num] = (freq[num] || 0) + 1;
  }
  freq.sort((a, b) =>
    b.count === a.count ? a.val - b.val : b.count - a.count
  );
  for (const { val, count } of freq) {
    for (let i = 0; i < count; ++i) {
      result.push(val);
    }
  }
  return result;
};

frequencySort([1,1,2,2,2,3]);