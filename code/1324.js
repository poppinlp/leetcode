const printVertically = s => {
  const words = s.split(' ');
  let maxLen = 0;
  for (let i = 0; i < words.length; ++i) {
    if (words[i].length > maxLen) maxLen = words[i].length;
  }
  const ret = new Array(maxLen);
  for (let i = 0; i < maxLen; ++i) {
    ret[i] = '';
    let prevSpace = '';
    for (let j = 0; j < words.length; ++j) {
      words[j][i] === undefined
        ? (prevSpace += ' ')
        : ((ret[i] += prevSpace + words[j][i]), (prevSpace = ''));
    }
  }
  return ret;
};

const printVertically = s => {
  const ret = [];
  for (let i = 0, idx = 0, word = 0; i < s.length; ++i, ++idx) {
    const char = s[i];
    if (char === ' ') { ++word; idx = -1; continue; }
    if (ret[idx] === undefined) { ret[idx] = ' '.repeat(word) + char; continue; }
    ret[idx].length !== word && (ret[idx] += ' '.repeat(word - ret[idx].length));
    ret[idx] += char;
  }
  return ret;
};

[
  "HOW ARE YOU",
  "TO BE OR NOT TO BE",
  "CONTEST IS COMING",
  "AA BBB C DDDD EEEEE F"
].forEach(data => {
  console.log(printVertically(data));
});