const destCity = (paths) => {
  const map = new Map();
  for (const path of paths) {
    map.set(path[0], map.has(path[0]) ? 0 : 1);
    map.set(path[1], map.has(path[1]) ? 0 : -1);
  }
  for (const item of map) {
    if (item[1] === -1) return item[0];
  }
};

const destCity = (paths) => {
  const set = new Set();
  for (const path of paths) set.add(path[0]);
  for (const path of paths) {
    if (!set.has(path[1])) return path[1];
  }
};
