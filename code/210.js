const findOrder = (numCourses, prerequisites) => {
  const graph = Array.from({length: numCourses}, () => []);
  const indegree = new Uint16Array(numCourses);
  const ret = new Uint16Array(numCourses);
  const zeroIndegree = [];
  let count = 0;
  for (let i = 0; i < prerequisites.length; ++i) {
    const [val, dep] = prerequisites[i];
    if (val === dep) return false;
    graph[dep].push(val);
    ++indegree[val];
  }
  for (let i = 0; i < numCourses; ++i) {
    indegree[i] === 0 && zeroIndegree.push(i);
  }
  while (zeroIndegree.length) {
    const idx = zeroIndegree.pop();
    ret[count] = idx;
    graph[idx].forEach(dep => --indegree[dep] === 0 && zeroIndegree.push(dep));
    ++count;
  }
  return count === numCourses ? ret : [];
};
