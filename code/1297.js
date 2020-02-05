const maxFreq = (s, maxLetters, minSize, maxSize) => {
  const substrMap = new Map();
  let max = 0;
  outer:
  for (let i = 0; i <= s.length - minSize; ++i) {
    const substr = s.substr(i, minSize);
    let flag = len = 0;
    for (let i = 0; i < substr.length; ++i) {
      const inc = 1 << (substr.charCodeAt(i) - 97);
      if ((flag & inc) === 0 && ++len > maxLetters) continue outer;
      flag |= inc;
    }
    const count = substrMap.has(substr) ? substrMap.get(substr) + 1 : 1;
    substrMap.set(substr, count);
    count > max && (max = count);
  }
  return max;
};

console.log(maxFreq(
  "abcde"
,2
,3
,3
))