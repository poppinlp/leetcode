const minSetSize = arr => {
  const LEN = arr.length;
  if (LEN < 3) return 1;

  const max = Math.max(...arr);
  const freq = new Uint16Array(max + 1);
  for (const val of arr) ++freq[val];

  let step = 0;
  let sum = 0;
  freq.sort((a, b) => b - a);
  for (const val of freq) {
    sum += val;
    ++step;
    if (sum >= LEN / 2) return step;
  }
};

const minSetSize = arr => {
  const LEN = arr.length;
  if (LEN < 3) return 1;

  const max = Math.max(...arr);
  const freq = new Uint16Array(max + 1);
  let maxFreq = 0;
  for (const val of arr) ++freq[val] > maxFreq && (maxFreq = freq[val]);

  const freqBased = new Uint32Array(maxFreq + 1);
  for (const val of freq) ++freqBased[val];

  let step = 0;
  let sum = 0;
  for (let i = maxFreq; i >= 1; --i) {
    while (freqBased[i]--) {
      sum += i;
      ++step;
      if (sum >= LEN / 2) return step;
    }
  }
};
