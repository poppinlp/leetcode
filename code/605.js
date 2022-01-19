const canPlaceFlowers = (flowerbed, n) => {
  const LEN = flowerbed.length;
  const AVAILABLE = 0;
  for (let i = 0; i < LEN; i++) {
    if (n === 0 || LEN - i < n) break;
    if (flowerbed[i] !== AVAILABLE) continue;
    if ((i === 0 || flowerbed[i - 1] === AVAILABLE) && (flowerbed[i + 1] === AVAILABLE || i === LEN - 1)) { --n; ++i; }
  }
  return !n;
};