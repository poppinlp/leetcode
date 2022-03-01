const cache = [0];
const countBits = num => {
  if (num <= cache.length) return cache.slice(0, num + 1);
  for (let i = cache.length; i <= num; ++i) cache.push(cache[i & (i - 1)] + 1);
  return cache;
};
