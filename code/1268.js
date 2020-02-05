/* const suggestedProducts = (products, searchWord) => {
  const result = Array.from({ length: searchWord.length }, () => []);
  products.sort();
  for (let idx = 0; idx < searchWord.length; ++idx) {
    const next = [];
    for (let i = 0; i < products.length; ++i) {
      if (products[i][idx] === searchWord[idx]) {
        next.push(products[i]);
        result[idx].length < 3 && result[idx].push(products[i]);
      }
    }
    if (next.length === 0) break;
    products = next;
  }
  return result;
}; */

const suggestedProducts = (products, searchWord) => {
  const result = Array.from({ length: searchWord.length }, () => []);
  let left = 0;
  let right = products.length - 1;
  products.sort();
  for (let idx = 0; idx < searchWord.length; ++idx) {
    const targetChar = searchWord[idx];
    for (let low = left, high = right; low < high;) {
      const mid = Math.floor((high + low) / 2);
      (products[mid][idx] === undefined || products[mid][idx] < targetChar) ? (low = mid + 1) : (high = mid);
      left = low;
    }
    for (let low = left, high = right; low < high;) {
      const mid = Math.ceil((high + low) / 2);
      products[mid][idx] > targetChar ? (high = mid - 1) : (low = mid);
      right = high;
    }
    for (let i = 0; i < 3; ++i) {
      if (left + i > right || products[left + i][idx] !== targetChar) break;
      result[idx].push(products[left + i]);
    }
    if (result[idx].length === 0) break;
  }
  return result;
};

[
  [["mobile","mouse","moneypot","monitor","mousepad"], "mouse"],
  [["bags","baggage","banner","box","cloths"], "bags"],
  [["havana"], "tatiana"]

].forEach(data => {
  console.log(JSON.stringify(Reflect.apply(suggestedProducts, null, data)));
});