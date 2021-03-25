// solution 1
const VOWEL = new Set(["a", "e", "i", "o", "u"]);

const isVower = (query, word) => {
  for (let i = 0; i < query.length; ++i) {
    if ((VOWEL.has(query[i]) && VOWEL.has(word[i])) || query[i] === word[i]) continue;
    return false;
  }
  return true;
};

const checker = (query, wordlist) => {
  let capital = "";
  let vowel = "";

  for (let i = 0; i < wordlist.length; ++i) {
    const word = wordlist[i];
    if (query.length !== word.length) continue;
    if (word === query) return word;
    const lowerQuery = query.toLowerCase();
    const lowerWord = word.toLowerCase();
    if (!capital && lowerQuery === lowerWord) capital = word;
    if (!capital && !vowel && isVower(lowerQuery, lowerWord)) vowel = word;
  }

  return capital || vowel;
};

const spellchecker = (wordlist, queries) => queries.map((query) => checker(query, wordlist));

// solution 2
const spellchecker = (wordlist, queries) => {
  const REG = /[aeiou]/g;
  const originSet = new Set();
  const spellMap = new Map();

  wordlist.forEach((word) => {
    const lowerWord = word.toLowerCase();
    const vowelWord = lowerWord.replace(REG, "_");
    originSet.add(word);
    if (!spellMap.has(lowerWord)) spellMap.set(lowerWord, word);
    if (!spellMap.has(vowelWord)) spellMap.set(vowelWord, word);
  });

  return queries.map((query) => {
    if (originSet.has(query)) return query;
    const lowerQuery = query.toLowerCase();
    if (spellMap.has(lowerQuery)) return spellMap.get(lowerQuery);
    const vowelQuery = lowerQuery.replace(REG, "_");
    if (spellMap.has(vowelQuery)) return spellMap.get(vowelQuery);
    return "";
  });
};
