const longestOnes = (arr, k) => {
  let max = 0;
  for (let i = 0; i < arr.length; ++i) {
    let cur = 0;
    for (let j = i, zero = 0; j < arr.length; ++j) {
      if (arr[j] === 0 && ++zero > k) break;
      ++cur;
    }
    cur > max && (max = cur);
  }
  return max;
};

const longestOnes = (arr, k) => {
  let max = 0;
  for (let left = -1, right = 0; right < arr.length; ++right) {
    if (arr[right] === 1 || --k >= 0) {
      right - left > max && (max = right - left);
    } else {
      while (arr[++left] !== 0);
      ++k;
    }
  }
  return max;
};

const longestOnes = (arr, k) => {
  let left = -1;
  for (let right = 0; right < arr.length; ++right) {
    arr[right] === 0 && --k;
    k < 0 && arr[++left] === 0 && ++k;
  }
  return arr.length - left - 1;
};
