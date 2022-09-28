function migratoryBirds(arr = []) {
  // Write your code here
  let res = [0, 0];

  const newArr = [...new Set(arr)].sort();
  const filter = newArr.map((bird) => arr.filter((item) => item == bird));

  filter.forEach((element) => {
    if (element.length > res[0]) {
      res[0] = element.length;
      res[1] = element[0];
    }
  });

  return res[1];
}

const arr = [1, 4, 4, 4, 5, 3];
console.log(migratoryBirds(arr));
