const findAndReplacePattern = (words, pattern) => {
  const ret = [];
  for (const word of words) {
    const w2p = new Map();
    const p2w = new Map();
    let flag = true;
    for (let i = 0; i < pattern.length; ++i) {
      const cw = word[i];
      const cp = pattern[i];
      if ((w2p.has(cw) && w2p.get(cw) !== cp) || (p2w.has(cp) && p2w.get(cp) !== cw)) {
        flag = false;
        break;
      }
      w2p.set(cw, cp);
      p2w.set(cp, cw);
    }
    flag && ret.push(word);
  }
  return ret;
};

const serialize = (str) => {
  const BASE = 96;
  const map = new Uint8Array(27);
  let ret = '';
  for (let i = 0, cur = BASE; i < str.length; ++i) {
    const code = str.charCodeAt(i) - BASE;
    if (map[code]) {
      ret += String.fromCharCode(map[code]);
    } else {
      ret += String.fromCharCode(cur);
      map[code] = cur++;
    }
  }
  return ret;
};
const findAndReplacePattern = (
  words,
  pattern,
  metaPattern = serialize(pattern)
) => words.filter((word) => serialize(word) === metaPattern);
