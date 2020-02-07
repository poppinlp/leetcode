const filterRestaurants = (restaurants, veganFriendly, maxPrice, maxDistance) => {
  const filtered = [];
  for (const item of restaurants) {
    (veganFriendly === 0 || item[2] === veganFriendly)
    && item[3] <= maxPrice
    && item[4] <= maxDistance
    && filtered.push(item);
  }
  filtered.sort((a, b) => a[1] === b[1] ? b[0] - a[0] : b[1] - a[1]);
  const ret = new Uint32Array(filtered.length);
  for (let i = 0; i < filtered.length; ++i) {
    ret[i] = filtered[i][0];
  }
  return ret;
};

const filterRestaurants = (restaurants, veganFriendly, maxPrice, maxDistance) => restaurants.filter(item => (veganFriendly === 0 || item[2] === veganFriendly) && item[3] <= maxPrice && item[4] <= maxDistance).sort((a, b) => a[1] === b[1] ? b[0] - a[0] : b[1] - a[1]).map(item => item[0]);

const filterRestaurants = (restaurants, veganFriendly, maxPrice, maxDistance) => {
  const RANGE = 10 ** 5;
  const buckets = new Array(RANGE);
  let count = 0;
  for (const item of restaurants) {
    if (
      (veganFriendly === 1 && item[2] !== veganFriendly)
      || item[3] > maxPrice
      || item[4] > maxDistance
    ) continue;
    buckets[item[1]] === undefined && (buckets[item[1]] = new Uint32Array(RANGE));
    buckets[item[1]][item[0]] = 1;
    ++count;
  }
  const ret = new Uint32Array(count);
  let idx = 0;
  for (let i = RANGE; i > 0; --i) {
    if (buckets[i] === undefined) continue;
    for (let j = RANGE; j > 0; --j) {
      buckets[i][j] === 1 && (ret[idx++] = j);
    }
  }
  return ret;
};