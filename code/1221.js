const balancedStringSplit = s => {
  let ret = 0;
  let balance = 0;
  for (const char of s) {
    char === 'R' ? ++balance : --balance;
    balance === 0 && ++ret;
  }
  return ret;
};
