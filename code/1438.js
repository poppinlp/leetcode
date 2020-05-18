const longestSubarray = (nums, limit) => {
  let ret = 0;
  for (let left = 0, right = 0, cur = 0, min = nums[0], max = nums[0]; right < nums.length; ++right) {
    while (nums[right] - min > limit || max - nums[right] > limit) {
      if (nums[left] === min || nums[left] === max) {
        min = 10 ** 9;
        max = 0;
        for (let i = left + 1; i <= right; ++i) {
          nums[i] < min && (min = nums[i]);
          nums[i] > max && (max = nums[i]);
        }
      }
      --cur;
      ++left;
    }
    nums[right] < min && (min = nums[right]);
    nums[right] > max && (max = nums[right]);
    ++cur > ret && (ret = cur);
  }
  return ret;
};

const longestSubarray = (nums, limit) => {
  const maxQue = [];
  const minQue = [];
  let maxTop = -1, minTop = -1, max = 0;
  for (let left = -1, right = 0; right < nums.length; ++right) {
    const val = nums[right];
    while (maxTop >= 0 && val > maxQue[maxTop]) --maxTop;
    while (minTop >= 0 && val < minQue[minTop]) --minTop;
    maxQue[++maxTop] = val;
    minQue[++minTop] = val;
    if (maxQue[0] - minQue[0] <= limit) {
      right - left > max && (max = right - left);
    } else {
      while (maxQue[0] - minQue[0] > limit) {
        ++left;
        if (maxQue[0] === nums[left]) {
          maxQue.shift();
          --maxTop;
        }
        if (minQue[0] === nums[left]) {
          minQue.shift();
          --minTop;
        }
      }
    }
  }
  return max;
};

const longestSubarray = (nums, limit) => {
  const maxQue = [];
  const minQue = [];
  let maxTop = -1, minTop = -1;
  let maxBottom = 0, minBottom = 0;
  let max = 0;
  for (let left = -1, right = 0; right < nums.length; ++right) {
    const val = nums[right];
    while (maxTop >= maxBottom && val > maxQue[maxTop]) --maxTop;
    while (minTop >= minBottom && val < minQue[minTop]) --minTop;
    maxQue[++maxTop] = val;
    minQue[++minTop] = val;
    if (maxQue[maxBottom] - minQue[minBottom] <= limit) {
      right - left > max && (max = right - left);
    } else {
      while (maxQue[maxBottom] - minQue[minBottom] > limit) {
        ++left;
        maxQue[maxBottom] === nums[left] && ++maxBottom;
        minQue[minBottom] === nums[left] && ++minBottom;
      }
    }
  }
  return max;
};

const longestSubarray = (nums, limit) => {
  const maxQue = [];
  const minQue = [];
  let maxTop = -1, minTop = -1, left = -1;
  let maxBottom = 0, minBottom = 0;
  for (let right = 0; right < nums.length; ++right) {
    const val = nums[right];
    while (maxTop >= maxBottom && val > maxQue[maxTop]) --maxTop;
    while (minTop >= minBottom && val < minQue[minTop]) --minTop;
    maxQue[++maxTop] = val;
    minQue[++minTop] = val;
    if (maxQue[maxBottom] - minQue[minBottom] > limit) {
      ++left;
      maxQue[maxBottom] === nums[left] && ++maxBottom;
      minQue[minBottom] === nums[left] && ++minBottom;
    }
  }
  return nums.length - left - 1;
};
