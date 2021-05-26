const minPartitions = (n) => {
  let ret = 0;
  for (const char of n) {
    char > ret && (ret = +char);
  }
  return ret;
};

const minPartitions = (n) => Math.max(...n.split(''));