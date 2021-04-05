const findingUsersActiveMinutes = (logs, k) => {
  const count = {};
  const ret = new Uint32Array(k);
  for (const log of logs) {
    const id = log[0];
    if (!count[id]) count[id] = new Set();
    if (!count[id].has(log[1])) {
      const size = count[id].size;
      if (size > 0) --ret[size - 1];
      ++ret[size];
      count[id].add(log[1]);
    }
  }
  return ret;
};
