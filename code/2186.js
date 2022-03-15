// counting
const minSteps = (s, t) => {
  const freq = {};
  let bothHave = 0;

  for (const c of s) {
    freq[c] = (freq[c] || 0) + 1;
  }
  for (const c of t) {
    if (!freq[c]) continue;
    --freq[c];
    ++bothHave;
  }

  return s.length + t.length - bothHave * 2;
};

// optimization
const minSteps = (s, t) => {
  const freq = new Uint16Array(26);
  const BASE_CODE = 97;
  let bothHave = 0;

  for (let i = 0; i < s.length; ++i) {
    ++freq[s.charCodeAt(i) - BASE_CODE];
  }
  for (let i = 0; i < t.length; ++i) {
    const code = t.charCodeAt(i) - BASE_CODE;
    freq[code] && ++bothHave && --freq[code];
  }

  return s.length + t.length - (bothHave << 1);
};
