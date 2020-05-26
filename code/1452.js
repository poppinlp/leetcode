/*
const peopleIndexes = favoriteCompanies => {
  const LEN = favoriteCompanies.length;
  const ret = [];
  for (let i = 0; i < LEN; ++i) {
    ret.push(i);
    for (let j = 0; j < LEN; ++j) {
      if (i === j) continue;
      let flag = true;
      for (const item of favoriteCompanies[i]) {
        if (!favoriteCompanies[j].includes(item)) { flag = false; break; }
      }
      if (flag) { ret.pop(); break; }
    }
  }
  return ret;
};

const peopleIndexes = favoriteCompanies => {
  const LEN = favoriteCompanies.length;
  const ret = [];
  const companies = favoriteCompanies.map(list => new Set(list));
  for (let i = 0; i < LEN; ++i) {
    ret.push(i);
    for (let j = 0; j < LEN; ++j) {
      if (i === j) continue;
      let flag = true;
      for (const item of favoriteCompanies[i]) {
        if (!companies[j].has(item)) { flag = false; break; }
      }
      if (flag) { ret.pop(); break; }
    }
  }
  return ret;
};
*/

const peopleIndexes = favoriteCompanies => {
  const LEN = favoriteCompanies.length;
  const ret = [];
  const companies = [];
  for (let i = 0, mapVal = 0, map = new Map(); i < LEN; ++i) {
    for (let j = 0; j < favoriteCompanies[i].length; ++j) {
      const name = favoriteCompanies[i][j];
      const val = map.has(name) ? map.get(name) : (map.set(name, mapVal), mapVal++);
      companies[val] ? companies[val].push(i) : (companies[val] = [i]);
      favoriteCompanies[i][j] = val;
    }
  }
  outer:
  for (let i = 0; i < LEN; ++i) {
    if (i === 8) debugger;
    const count = new Uint8Array(LEN);
    ret.push(i);
    for (const val of favoriteCompanies[i]) {
      for (const superset of companies[val]) {
        if (superset === i) continue;
        if (++count[superset] === favoriteCompanies[i].length) {
          ret.pop();
          continue outer;
        }
      }
    }
  }
  return ret;
};

console.log(peopleIndexes(
))