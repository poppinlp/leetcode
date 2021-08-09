const isIsomorphic = (s, t) => {
  const map1 = {};
  const map2 = {};
  for (let i = 0; i < s.length; ++i) {
    const v1 = s.charCodeAt(i);
    const v2 = t.charCodeAt(i);
    if ((map1[v1] && map1[v1] !== v2) || (map2[v2] && map2[v2] !== v1))
      return false;
    map1[v1] = v2;
    map2[v2] = v1;
  }
  return true;
};
