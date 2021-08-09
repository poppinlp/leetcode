const topKFrequent = (words, k) => {
  const freq = {};
  for (const word of words) {
    freq[word] ? ++freq[word] : (freq[word] = 1);
  }
};
