const makeNum = (start, len) => {
  let val = start;
  while (--len) {
    val = val * 10 + ++start;
  }
  return val;
};
const sequentialDigits = (low, high) => {
  let lowLen = highLen = 0;
  for (let curLow = low; curLow > 0; ++lowLen) {
    curLow = curLow / 10 << 0;
  }
  for (let curHigh = high; curHigh > 0; ++highLen) {
    curHigh = curHigh / 10 << 0;
  }

  const ret = [];
  for (let len = lowLen; len <= highLen; ++len) {
    for (let pre = 1; pre <= 10 - len; ++pre) {
      const val = makeNum(pre, len);
      val <= high && val >= low && ret.push(val);
    }
  }
  return ret;
};

const sequentialDigits = (low, high) => {
  const ret = [];
  for (let len = 2; len <= 9; ++len) {
    for (let pre = 1; pre <= 10 - len; ++pre) {
      const val = makeNum(pre, len);
      val <= high && val >= low && ret.push(val);
    }
  }
  return ret;
};

const sequentialDigits = (low, high) => {
  const queue = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const ret =[];
  for (let idx = 0; idx < queue.length; ++idx) {
    const cur = queue[idx];
    const last = cur % 10;
    if (last === 9) continue;
    const next = cur * 10 + last + 1;
    if (next > high) continue;
    next >= low && ret.push(next);
    queue.push(next);
  }
  return ret;
};

const NUMS = [
  12,23,34,45,56,67,78,89,
  123,234,345,456,567,678,789,
  1234,2345,3456,4567,5678,6789,
  12345,23456,34567,45678,56789,
  123456,234567,345678,456789,
  1234567,2345678,3456789,
  12345678,23456789,
  123456789
];
const sequentialDigits = (low, high) => {
  const ret = [];
  for (let i = 0; i < NUMS.length; ++i) {
    if (NUMS[i] > high) break;
    NUMS[i] >= low && ret.push(NUMS[i]);
  }
  return ret;
}

console.log(JSON.stringify(
  sequentialDigits(
    31365477,
    514800930
  )
))