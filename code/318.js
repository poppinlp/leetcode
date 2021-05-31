const maxProduct = (words) => {
  const charSets = words.map((word) => new Set(word));
  let max = 0;
  for (let i = 0; i < words.length - 1; ++i) {
    for (let j = i + 1; j < words.length; ++j) {
      const newLen = words[i].length * words[j].length;
      let hasCommon = false;
      if (newLen <= max) continue;
      for (let k = 97; k <= 122; ++k) {
        const char = String.fromCharCode(k);
        if (!charSets[i].has(char) || !charSets[j].has(char)) continue;
        hasCommon = true;
        break;
      }
      !hasCommon && (max = newLen);
    }
  }
  return max;
};

const maxProduct = (words) => {
  const BASE_CODE = 97;
  const charSets = words.map((word) => {
    const set = new Uint8Array(26);
    for (let i = 0; i < word.length; ++i) {
      set[word.charCodeAt(i) - BASE_CODE] = 1;
    }
    return set;
  });
  let max = 0;
  for (let i = 0; i < words.length - 1; ++i) {
    for (let j = i + 1; j < words.length; ++j) {
      const newLen = words[i].length * words[j].length;
      let hasCommon = false;
      if (newLen <= max) continue;
      for (let k = 0; k <= 26; ++k) {
        if (!charSets[i][k] || !charSets[j][k]) continue;
        hasCommon = true;
        break;
      }
      !hasCommon && (max = newLen);
    }
  }
  return max;
};

const maxProduct = (words) => {
  const BASE_CODE = 97;
  const charSets = words.map((word) => {
    let data = 0;
    for (let i = 0; i < word.length; ++i) {
      data |= 1 << (word.charCodeAt(i) - BASE_CODE);
    }
    return data;
  });
  let max = 0;
  for (let i = 0; i < words.length - 1; ++i) {
    for (let j = i + 1; j < words.length; ++j) {
      const newLen = words[i].length * words[j].length;
      newLen > max && (charSets[i] & charSets[j]) === 0 && (max = newLen);
    }
  }
  return max;
};