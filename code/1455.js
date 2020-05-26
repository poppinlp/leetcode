const isPrefixOfWord = (sentence, searchWord) => {
  sentence += ' ';
  for (let i = 0, j = 1, word = ''; i < sentence.length; ++i) {
    if (sentence[i] !== ' ') { word += sentence[i]; continue; }
    if (word.startsWith(searchWord)) return j;
    ++j;
    word = '';
  }
  return -1;
};

const isPrefixOfWord = (sentence, searchWord) => {
  for (let i = 0, j = 1, word = ''; i < sentence.length; ++i) {
    if (sentence[i] === ' ') { ++j; word = ''; continue; }
    word += sentence[i];
    if (word === searchWord) return j;
  }
  return -1;
};

const isPrefixOfWord = (sentence, searchWord) => {
  const words = sentence.split(' ');
  for (let i = 0; i < words.length; ++i) {
    if (words[i].startsWith(searchWord)) return i + 1;
  }
  return -1;
};

const isPrefixOfWord = (sentence, searchWord, idx = sentence.split(' ').findIndex(word => word.startsWith(searchWord))) => idx === -1 ? -1 : idx + 1;
