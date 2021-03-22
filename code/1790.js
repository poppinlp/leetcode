// solution 1
const areAlmostEqual = (s1, s2) => {
  const BASE = 97;
  const dict1 = new Uint8Array(26);
  const dict2 = new Uint8Array(26);

  let diff = 0;
  for (let i = 0; i < s1.length; ++i) {
    ++dict1[s1.charCodeAt(i) - BASE];
    ++dict2[s2.charCodeAt(i) - BASE];
    s1[i] !== s2[i] && ++diff;
  }

  let flag = true;
  for (let i = 0; i < 26; ++i) {
    if (dict1[i] !== dict2[i]) { flag = false; break; }
  }

  return flag && (diff === 2 || diff === 0);
};

// solution 2
const areAlmostEqual = (s1, s2) => {
  let diff = 0;
  let di1 = 0;
  let di2 = 0;

  for (let i = 0; i < s1.length; ++i) {
    if (s1[i] === s2[i]) continue;
    if (++diff > 2) return false;
    diff === 1 ? (di1 = i) : (di2 = i);
  }

  return (diff === 0 || diff === 2) && s1[di1] === s2[di2] && s1[di2] === s2[di1];
};