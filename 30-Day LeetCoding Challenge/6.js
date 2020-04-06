const wordHash = word => {
  const map = new Map();
  for (let i = 0; i < word.length; ++i) {
    const char = word[i];
    map.set(char, map.has(char) ? map.get(char) + 1 : 1);
  }
  return map;
};
const compareHash = (map1, map2) => {
  if (map1.size !== map2.size) return false;
  for (let [char, count] of map1.entries()) {
    if (!map2.has(char) || map2.get(char) !== count) return false;
  }
  return true;
};
const groupAnagrams = strs => {
  const ret = [];
  const hashMap = new Map();
  for (let i = 0; i < strs.length; ++i) {
    const word = strs[i];
    const hash = wordHash(word);
    let exist = false;
    for (let [map, idx] of hashMap.entries()) {
      if (!compareHash(hash, map)) continue;
      exist = true;
      ret[idx].push(word);
      break;
    }
    !exist && hashMap.set(hash, ret.push([word]) - 1);
  }
  return ret;
};

const groupAnagrams = strs => {
  const hashMap = new Map();
  for (const word of strs) {
    const serializeWord = word.split("").sort().join("");
    hashMap.has(serializeWord)
      ? hashMap.get(serializeWord).push(word)
      : hashMap.set(serializeWord, [word]);
  }
  return [...hashMap.values()];
};

const groupAnagrams = strs => {
  const BASE_CODE = 97;
  const hashMap = new Map();
  for (const word of strs) {
    const countList = new Int8Array(26);
    for (let j = 0; j < word.length; ++j) {
      ++countList[word.charCodeAt(j) - BASE_CODE];
    }
    const serializeWord = countList.join("");
    hashMap.has(serializeWord)
      ? hashMap.get(serializeWord).push(word)
      : hashMap.set(serializeWord, [word]);
  }
  return [...hashMap.values()];
};

const groupAnagrams = strs => {
  const BASE_CODE = 97;
  const CHAR_VAL_MAP = [2, 3, 5, 7, 11 ,13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101];
  const hashMap = new Map();
  for (const word of strs) {
    let val = 1;
    for (let j = 0; j < word.length; ++j) {
      val *= CHAR_VAL_MAP[word.charCodeAt(j) - BASE_CODE];
    }
    hashMap.has(val)
      ? hashMap.get(val).push(word)
      : hashMap.set(val, [word]);
  }
  return [...hashMap.values()];
};
