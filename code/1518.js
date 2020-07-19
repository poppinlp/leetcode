const numWaterBottles = (numBottles, numExchange) => {
  let ret = numBottles;
  while (numBottles >= numExchange) {
    const newBottles = numBottles / numExchange >> 0;
    numBottles = newBottles + numBottles % numExchange;
    ret += newBottles;
  }
  return ret;
};

const numWaterBottles = (numBottles, numExchange) => numBottles + (numBottles - 1) / (numExchange - 1) >> 0;
