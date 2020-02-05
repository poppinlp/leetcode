const groupThePeople = groupSizes => {
  const groups = [];
  const sizeMap = new Map();
  for (let i = 0; i < groupSizes.length; ++i) {
    const size = groupSizes[i];
    if (sizeMap.has(size)) {
      groups[sizeMap.get(size)].push(i) === size && sizeMap.delete(size);
    } else {
      const idx = groups.push([i]) - 1;
      size > 1 && sizeMap.set(size, idx);
    }
  }
  return groups;
};
