const angleClock = (hour, minutes) => {
  const DEGREE_UNIT = 360 / 60;
  const angle = Math.abs(hour * 60 * DEGREE_UNIT - minutes * DEGREE_UNIT);
  return Math.min(angle, 360 - angle);
};
