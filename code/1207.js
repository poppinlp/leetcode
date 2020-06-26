const uniqueOccurrences = arr => {
  const freq = new Uint8Array(2001);
  const occur = new Uint8Array(1000);
  for (const val of arr) {
    ++freq[val + 1000];
  }
  for (const t of freq) {
    if (t !== 0 && occur[t]++) return false;
  }
  return true;
};
