function birthday(s, d, m) {
  // Write your code here
  const intervalInArray = m;
  const toFind = d;
  const interval = s;
  let howManyExist = 0;

  interval.forEach((actualValue, index) => {
    let nextIndexToSum = index + 1;
    let nextIndexValuesSum = 0;
    for (let a = 0; a < intervalInArray - 1; a++) {
      const actualValue = interval[nextIndexToSum] ? interval[nextIndexToSum] : 0;
      nextIndexValuesSum += actualValue;
      nextIndexToSum++;
    }
    const theSumOfValueByIntervalIsEqualToRequired = actualValue + nextIndexValuesSum == toFind
    if (theSumOfValueByIntervalIsEqualToRequired) howManyExist++;
  });

  return howManyExist;
}

// console.log(birthday([2, 2, 1, 3, 2], 4, 2));
// console.log(birthday([1, 2, 1, 3, 2], 3, 2));
// console.log(birthday([1, 1, 1, 1, 1, 1], 3, 2));
console.log(birthday([4], 4, 1));
