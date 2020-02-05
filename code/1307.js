const isSolvable = (words, result) => {
  const WORDS_COUNT = words.length;
  const MAX_WORD_LEN = result.length;
  const OFFSET = 30;
  const INIT_VAL = 10;
  const charVal = new Uint8Array(91).fill(INIT_VAL);

  charVal[result.charCodeAt(0) - OFFSET] = 1;
  for (let i = 0; i < WORDS_COUNT; ++i) {
    if (words[i].length > MAX_WORD_LEN) return false;
    charVal[words[i].charCodeAt(0) - OFFSET] = 1;
  }
  return helper(1, 0, 0);

  function helper(digit, wordIdx, carry) {
    if (digit > MAX_WORD_LEN) return true;

    if (wordIdx === WORDS_COUNT) {
      const resultNum = carry % 10;
      const resultCharCode = result.charCodeAt(MAX_WORD_LEN - digit);
      const isUsed = charVal[resultCharCode] !== INIT_VAL;
      if (
        (!isUsed && charVal[resultNum] === 1)
        || (isUsed && charVal[resultCharCode] !== resultNum)
        || (resultNum === 0 && charVal[resultCharCode - OFFSET] === 1)
      ) return false;
      charVal[resultNum] = 1;
      charVal[resultCharCode] = resultNum;
      if (helper(digit + 1, 0, (carry - resultNum) / 10)) return true;
      !isUsed && (charVal[resultNum] = INIT_VAL) && (charVal[resultCharCode] = INIT_VAL);
      return false;
    }

    const idx = words[wordIdx].length - digit;
    if (idx < 0) return helper(digit, wordIdx + 1, carry);
    const charCode = words[wordIdx].charCodeAt(idx);
    if (charVal[charCode] !== INIT_VAL) return helper(digit, wordIdx + 1, carry + charVal[charCode]);
    for (let i = 0; i < 10; ++i) {
      if (charVal[i] !== INIT_VAL || (i === 0 && charVal[charCode - OFFSET] !== INIT_VAL)) continue;
      charVal[i] = 1;
      charVal[charCode] = i;
      if (helper(digit, wordIdx + 1, carry + i)) return true;
      charVal[i] = INIT_VAL;
      charVal[charCode] = INIT_VAL;
    }

    return false;
  }
};

const isSolvable = (words, result) => {
  const charVal = new Map();
  const usedVal = new Set();
  const leadChar = new Set(result[0]);
  const WORDS_COUNT = words.length;
  const MAX_WORD_LEN = result.length;

  for (let i = 0; i < WORDS_COUNT; ++i) {
    if (words[i].length > MAX_WORD_LEN) return false;
    leadChar.add(words[i][0]);
  }
  return helper(1, 0, 0);

  function helper(digit, wordIdx, carry) {
    if (digit > MAX_WORD_LEN) return true;

    if (wordIdx === WORDS_COUNT) {
      const resultNum = carry % 10;
      const resultChar = result[MAX_WORD_LEN - digit];
      const isUsed = charVal.has(resultChar);
      if (
        (!isUsed && usedVal.has(resultNum))
        || (isUsed && charVal.get(resultChar) !== resultNum)
        || (resultNum === 0 && leadChar.has(resultChar))
      ) return false;
      usedVal.add(resultNum);
      charVal.set(resultChar, resultNum);
      if (helper(digit + 1, 0, (carry - resultNum) / 10)) return true;
      !isUsed && usedVal.delete(resultNum) && charVal.delete(resultChar);
      return false;
    }

    const idx = words[wordIdx].length - digit;
    if (idx < 0) return helper(digit, wordIdx + 1, carry);
    const char = words[wordIdx][idx];
    if (charVal.has(char)) return helper(digit, wordIdx + 1, carry + charVal.get(char));
    for (let i = 0; i < 10; ++i) {
      if (usedVal.has(i) || (i === 0 && leadChar.has(char))) continue;
      usedVal.add(i);
      charVal.set(char, i);
      if (helper(digit, wordIdx + 1, carry + i)) return true;
      usedVal.delete(i);
      charVal.delete(char);
    }

    return false;
  }
};

const convertVal = (str, charVal) => {
  let val = 0;
  for (let i = 0; i < str.length; ++i) {
    val = val * 10 + charVal.get(str[i]);
  }
  return val;
};

const isSolvable = (words, result) => {
  const charVal = new Map();
  const usedVal = new Set();
  const lastWord = words[words.length - 1];
  const leadChar = new Set([result[0], lastWord[0]]);
  let chars = result;
  for (let i = 0; i < words.length - 1; ++i) {
    chars += words[i];
    leadChar.add(words[i][0]);
  }
  return helper(0);

  function helper(idx) {
    if (idx === chars.length) return check();
    const char = chars[idx];
    if (charVal.has(char)) return helper(idx + 1);
    for (let i = 0; i <= 9; ++i) {
      if (usedVal.has(i) || (i === 0 && leadChar.has(char))) continue;
      usedVal.add(i);
      charVal.set(char, i);
      if (helper(idx + 1)) return true;
      charVal.delete(char);
      usedVal.delete(i);
    }
    return false;
  }

  function check() {
    let sum = convertVal(result, charVal);
    for (let i = 0; i < words.length - 1; ++i) {
      sum -= convertVal(words[i], charVal);
      if (sum < 0) return false;
    }
    sum = sum.toString().split('');
    if (sum.length !== lastWord.length) return false;
    for (let i = 0; i < sum.length; ++i) {
      if (charVal.has(lastWord[i]) && +sum[i] !== charVal.get(lastWord[i])) return false;
    }
    return true;
  }
};

const isSolvable = (words, result) => {
  const charVal = new Map();
  const chars = [];
  for (const char of result) {
    !charVal.has(char) && chars.push(char) && charVal.set(char, -1);
  }
  for (const word of words) {
    for (const char of word) {
      !charVal.has(char) && chars.push(char) && charVal.set(char, -1);
    }
  }
  if (charVal.size > 10) return false;
  const usedVal = new Set();
  return helper(0);

  function helper(idx) {
    if (idx === charVal.size) return check();
    const char = chars[idx];
    for (let i = 0; i <= 9; ++i) {
      if (usedVal.has(i) || (idx === 0 && i === 0)) continue;
      charVal.set(char, i);
      usedVal.add(i);
      if (helper(idx +1)) return true;
      usedVal.delete(i);
    }
    return false;
  }

  function check() {
    let sum = 0;
    for (const word of words) {
      if (charVal[word[0]] === 0) return false;
      sum += convertVal(word, charVal)
    }
    return sum === convertVal(result, charVal);
  }
};

[
  // [["send", "more"], "money"],
  // [["SIX","SEVEN","SEVEN"], "TWENTY"],
  // [["THIS","IS","TOO"], "FUNNY"],
  // [["LEET","CODE"], "POINT"],
  // [["JACAH","IIJI","GACG"], "DDJF"],
  [["AB","CD","EF"], "GHIJ"],
].forEach(data => {
  console.log(Reflect.apply(isSolvable, null, data));
});
