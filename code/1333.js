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