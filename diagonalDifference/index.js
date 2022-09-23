function diagonalDifference(arr) {
  // Write your code here
  let loop = 0;

  const arr1 = [];
  const arr2 = [];

  //First Array
  arr.forEach((element) => {
    arr1.push(element[loop]);
    loop++;
  });

  //First Array
  arr.forEach((element) => {
    loop--;
    arr2.push(element[loop]);
  });

  return Math.abs(
    arr1.reduce((all, current) => all + current, 0) -
      arr2.reduce((all, current) => all + current, 0)
  );
}

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];

console.log(diagonalDifference(arr));
