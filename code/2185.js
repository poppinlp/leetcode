const prefixCount = (words, pref) => {
  let count = 0;
  for (const word of words) {
    word.startsWith(pref) && ++count;
  }
  return count;
}

const prefixCount = (words, pref) => words.filter(word => word.startsWith(pref)).length;
