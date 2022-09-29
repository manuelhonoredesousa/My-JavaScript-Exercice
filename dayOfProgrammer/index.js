function dayOfProgrammer(year) {
  // Write your code here
  const programmerDay = 256;
  let febery = 0;

  if (year <= 1917) {
    if (year / 4 == parseInt(year / 4)) febery = 29;
    else febery = 28;
  } else if (year == 1918) {
    febery = 15;
  } else if (year >= 1919) {
    if (year / 400 == parseInt(year / 400) || (year / 4 == parseInt(year / 4) && year / 100 != parseInt(year / 100))) febery = 29;
    else febery = 28;
  }
  return `${programmerDay - (31 + febery + 31 + 30 + 31 + 30 + 31 + 31)}.09.${year}`;
}

// try with this value to see if it work on your code = 1917 / 1918;
const year = 2017;
console.log(dayOfProgrammer(year));