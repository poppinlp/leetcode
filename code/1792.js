const calcRatioInc = (data) => {
    return (data[0] + 1) / (data[1] + 1) - data[0] / data[1];
};

const maxAverageRatio = (classes, extraStudents) => {
  classes.sort((a, b) => calcRatioInc(b) - calcRatioInc(a));

  for (let i = 0; i < extraStudents; ++i) {
    console.log('-----------');
    console.log(classes);
    ++classes[0][0];
    ++classes[0][1];
    const newData = classes[0];
    const newInc = calcRatioInc(newData);
    for (let j = 1; j < classes.length; ++j) {
      const incJ = calcRatioInc(classes[j]);
      if (incJ <= newInc) {
        classes[j - 1] = newData;
        break;
      }
      classes[j - 1] = classes[j];
    }
  }
  console.log('-----------');
  console.log(classes);

  let sum = 0;
  for (let i = 0; i < classes.length; ++i) {
    sum += classes[i][0] / classes[i][1];
  }

  return sum / classes.length;
};

console.log(maxAverageRatio(
  [[280,872],[108,128],[3,665],[93,972],[347,464],[443,584],[809,999],[366,398]]
, 77862
))