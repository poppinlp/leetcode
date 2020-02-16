const minSteps = (s, t) => {
  const BASE = 97;
  const count = new Int32Array(26);
  for (let i = 0; i < s.length; ++i) {
    ++count[s.charCodeAt(i) - BASE];
    --count[t.charCodeAt(i) - BASE];
  }
  let step = 0;
  for (let i = 0; i < 26; ++i) {
    count[i] > 0 && (step += count[i]);
  }
  return step;
};

console.log(minSteps('bab', 'aba'))