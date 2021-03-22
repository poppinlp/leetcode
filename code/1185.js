// solution 1
const LIST = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayOfTheWeek = (day, month, year) => LIST[new Date(`${year}-${month}-${day}`).getDay()];

// solution 2
const LIST = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const MONTH_DAYS = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const dayOfTheWeek = (day, month, year) => {
  let sum = (year - 1) * 365 + day + Math.floor((month > 2 ? year : year - 1) / 4) - Math.floor(year / 100) + Math.floor(year / 400);
  for (let i = 0; i < month; ++i) sum += MONTH_DAYS[i];
  return LIST[sum % 7];
};

// solution 3
const LIST = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayOfTheWeek = (d, m, y) => {
  if (m < 3) { --y; m += 12; }
  const c = Math.floor(y / 100);
  y %= 100;
  const w = (y + Math.floor(y / 4) + Math.floor(c / 4) - 2 * c + Math.floor((26 * (m + 1)) / 10) + d - 1) % 7;
  return LIST[(w + 7) % 7];
};
