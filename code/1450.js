const busyStudent = (startTime, endTime, queryTime) => {
  let ret = 0;
  for (let i = 0; i < startTime.length; ++i) {
    startTime[i] <= queryTime && endTime[i] >= queryTime && ++ret;
  }
  return ret;
};

const busyStudent = (startTime, endTime, queryTime) => startTime.filter((t, i) => queryTime >= t && queryTime <= endTime[i]).length;

const busyStudent = (startTime, endTime, queryTime) => startTime.reduce((prev, t, i) => queryTime >= t && queryTime <= endTime[i] ? prev + 1 : prev, 0);
