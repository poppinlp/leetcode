const sortArray = (nums) => nums.sort((a, b) => a - b);

// bucket sort
const sortArray = (nums) => {
  const OFFSET = 5 * 10 ** 4;
  const buckets = new Int16Array(OFFSET * 2 + 1);
  const ret = [];
  for (const num of nums) ++buckets[num + OFFSET];
  for (let i = 0; i < buckets.length; ++i) {
    while (buckets[i]--) {
      ret.push(i - OFFSET);
    }
  }
  return ret;
};