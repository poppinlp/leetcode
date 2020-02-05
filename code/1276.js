const numOfBurgers = (tomatoSlices, cheeseSlices) => {
  const jumbo = (tomatoSlices - cheeseSlices * 2) / 2;
  return jumbo >= 0 && jumbo % 1 === 0 && jumbo <= cheeseSlices ? [jumbo, cheeseSlices - jumbo] : [];
};