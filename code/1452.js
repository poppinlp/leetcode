const peopleIndexes = favoriteCompanies => {
  const ret = [];
  for (let i = 0; i < favoriteCompanies.length; ++i) {
    ret.push(i);
    for (let j = 0; j < favoriteCompanies.length; ++j) {
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

// TODO