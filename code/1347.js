const minSteps = (s, t) => {
  const BASE = 97;
  const count1 = new Int32Array(26);
  const count2 = new Int32Array(26);
  for (let i = 0; i < s.length; ++i) {
    ++count1[s.charCodeAt(i) - BASE];
  }
  for (let i = 0; i < t.length; ++i) {
    ++count2[t.charCodeAt(i) - BASE];
  }
  let step = 0;
  for (let i = 0; i < 26; ++i) {
    step += count1[i] > count2[i] ? count1[i] - count2[i] : 0;
  }
  return step;
};

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
