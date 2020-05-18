const arrangeWords = text => {
  const buckets = [];
  const words = text.split(' ');
  let ret = '';
  words[0] = words[0].toLowerCase();
  for (const word of words) {
    buckets[word.length] ? buckets[word.length].push(word) : (buckets[word.length] = [word]);
  }
  for (const list of buckets) {
    list && list.forEach(word => ret += word + ' ');
  }
  return ret[0].toUpperCase() + ret.slice(1, -1);
};
