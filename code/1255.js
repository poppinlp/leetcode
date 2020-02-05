const maxScoreWords = (words, letters, scores) => {
  const freq = new Uint8Array(26);
  let max = 0;
  for (let i = 0; i < letters.length; ++i) {
    ++freq[letters[i].charCodeAt(0) - 97];
  }
  recursive(0, 0);
  return max;

  function recursive(wordIdx, score) {
    if (wordIdx === words.length) {
      return score > max && (max = score);
    }
    const fillScore = fill(wordIdx);
    recursive(wordIdx + 1, score + fillScore);
    fillScore > 0 && recover(wordIdx);
    recursive(wordIdx + 1, score);
  }

  function fill(wordIdx) {
    let score = 0;
    for (let i = 0; i < words[wordIdx].length; ++i) {
      const code = words[wordIdx].charCodeAt(i) - 97;
      if (freq[code] !== 0) {
        --freq[code];
        score += scores[code];
        continue;
      }
      for (let j = 0; j < i; ++j) {
        ++freq[words[wordIdx].charCodeAt(j) - 97];
      }
      score = 0;
      break;
    }
    return score;
  }

  function recover(wordIdx) {
    for (let i = 0; i < words[wordIdx].length; ++i) {
      ++freq[words[wordIdx].charCodeAt(i) - 97];
    }
  }
};

[
  [
    ["dog", "cat", "dad", "good"],
    ["a", "a", "c", "d", "d", "d", "g", "o", "o"],
    [ 1, 0, 9, 5, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
  ],
  [
    ["xxxz","ax","bx","cx"],
    ["z","a","b","c","x","x","x"],
    [4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,10]
  ],
  [
    ["leetcode"],
    ["l","e","t","c","o","d"],
    [0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0]
  ]
].forEach(data => {
  console.log(Reflect.apply(maxScoreWords, null, data));
});