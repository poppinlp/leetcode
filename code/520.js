const isCapital = (str, idx, code = str.charCodeAt(idx)) => code >= 65 && code <= 90;
const detectCapitalUse = (word) => {
  let hasCapital = isCapital(word, 1);
  for (let i = 2; i < word.length; ++i) {
    const isCurCapital = isCapital(word,i );
    if (isCurCapital !== hasCapital) return false;
    hasCapital = isCurCapital;
  }
  return !isCapital(word, 0) && hasCapital ? false : true;
};