const countVowelSubstrings = (word) => {
  const REQUIRE_MATCH = 5;
  const counter = {a: 0, e: 0, i: 0, o: 0, u: 0};
  let matchCount = 0;
  let ret = 0;
  for (let left = 0, right = 0; right < word.length; ++right) {
    // is vowel
    console.log(left, right, word[right], counter, matchCount, ret);
    if (counter[word[right]] !== undefined) {
      ++counter[word[right]] === 1 && ++matchCount;
      matchCount === REQUIRE_MATCH && ++ret;
      continue;
    }
    // not vowel
    if (matchCount !== REQUIRE_MATCH) {
      left = right + 1;
      matchCount = 0;
      continue;
    }
    while (true) {
      if (--counter[word[left++]] === 0) break;
      ++ret;
    }
    left = right + 1;
    matchCount = 0;
  }
  return ret;
};

countVowelSubstrings('cuaieuouac');
