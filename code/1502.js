const canMakeArithmeticProgression = (arr) => {
  arr.sort((a, b) => a - b);
  for (let diff = arr[1] - arr[0], i = 2; i < arr.length; ++i) {
    if (arr[i] - arr[i - 1] !== diff) return false;
  }
  return true;
};

const canMakeArithmeticProgression = (arr) => {
  const EDGE = 10 ** 6;
  const bucket = new Uint16Array(EDGE * 2);
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;
  for (const val of arr) {
    ++bucket[val + EDGE];
    val + EDGE < min && (min = val + EDGE);
    val + EDGE > max && (max = val + EDGE);
  }
  const diff = (max - min) / (arr.length - 1);
  for (let prev = min, i = min + 1; i <= max; ++i) {
    if (bucket[i] === 0) continue;
    if (bucket[i] > 1 || diff !== i - prev) return false;
    prev = i;
  }
  return true;
};

const canMakeArithmeticProgression = (arr) => {
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;
  for (const val of arr) {
    val < min && (min = val);
    val > max && (max = val);
  }
  const diff = (max - min) / (arr.length - 1);
  if (diff >> 0 !== diff) return false;
  for (let i = 0; i < arr.length; ++i) {
    let cur = i;
    while (arr[cur] !== min + cur * diff) {
      const nextIdx = (arr[cur] - min) / diff;
      if (nextIdx >> 0 !== nextIdx) return false;
      arr[cur] = min + cur * diff;
      cur = nextIdx;
    }
    if (cur > i) return false;
  }
  return true;
};
