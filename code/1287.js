const findSpecialInteger = arr => {
  const THRESHOLD = Math.floor(arr.length / 4);
  for (let i = 0; i <= arr.length - THRESHOLD; ++i) {
    if (arr[i] === arr[i + THRESHOLD]) return arr[i];
  }
};