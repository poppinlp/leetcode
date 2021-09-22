const findMaxConsecutiveOnes = (nums) => {
  let max = 0;
  let cur = 0;
  for (const num of nums) {
    num ? ++cur > max && (max = cur) : (cur = 0);
  }
  return max;
};

const findMaxConsecutiveOnes = (nums, cur = 0) => nums.reduce((max, num) => num ? Math.max(++cur, max) : (cur = 0, max), 0);
