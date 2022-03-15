// binary search
const isPossible = (times, cur, total) => {
  let count = 0;
  for (const time of times) {
    count += cur / time >> 0;
    if (count >= total) return true;
  }
  return count >= total;
};
const minimumTime = (times, totalTrips) => {
  let left = 1;
  let right = Number.MAX_SAFE_INTEGER;
  for (const time of times) {
    right = Math.min(right, totalTrips * time);
  }
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    isPossible(times, mid, totalTrips) ? right = mid : left = mid + 1;
  }
  return left;
};