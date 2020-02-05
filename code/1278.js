const palindromePartition = (s, k) => {
  if (s.length === k) return 0;

  const END = s.length - 1;
  const MAX_PART = s.length - k + 1;
  const steps = new Map();
  const cache = new Map();
  calcSteps(0, 0, 0);
  for (let i = 1; i <= END; ++i) {
    calcSteps(i, i, 0);
    calcSteps(i - 1, i, 0);
  }

  return rec(0, k);

  function rec(start, part) {
    const key = start * 100 + part;
    if (cache.has(key)) return cache.get(key);
    let min = END;
    if (part === 1) {
      min = steps.get(start * 100 + END);
    } else {
      for (let i = start + 1; i <= END - part + 2; ++i) {
        min = Math.min(min, steps.get(start * 100 + i - 1) + rec(i, part - 1));
      }
    }
    cache.set(key, min)
    return min;
  }

  function calcSteps(start, end, step) {
    if (end - start + 1 > MAX_PART) return;
    s[start] !== s[end] && ++step;
    steps.set(start * 100 + end, step);
    --start >= 0 && ++end <= END && calcSteps(start, end, step);
  }
};

[
  ["abc", 2],
  // ["aabbc", 3],
  // ["leetcode", 8],
  // ["babcddcbe", 3],
  // ["babcddcbe", 5],
  // ["tcymekt", 4],
  // ["cbsfmgnhnp", 1],
  // ["fyhowoxzyrincxivwarjuwxrwealesxsimsepjdqsstfggjnjhilvrwwytbgsqbpnwjaojfnmiqiqnyzijfmvekgakefjaxryyml", 32],
].forEach(data => {
  console.log(Reflect.apply(palindromePartition, null, data));
});
