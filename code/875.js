const minEatingSpeed = (piles, h) => {
  let min = Math.min(...piles);
  let max = Math.max(...piles);

  while (min < max) {
    const mid = Math.floor((min + max) / 2);
    isValid([...piles], mid, h) ? max = mid : min = mid + 1;
  }

  return max;

  function isValid(list, value, limit) {
    for (let i = 0, count = 0; i < list.length; ++count) {
      if (count > limit) return false;
      list[i] -= value;
      list[i] <= 0 && ++i;
    }
    return true;
  }
};