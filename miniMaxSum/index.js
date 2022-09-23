function miniMaxSum(arr) {
  // Write your code here
  const res = [];
  let del = 0;

  arr.sort();
  del = arr.splice(arr.length - 1, 1);
  res.push(arr.reduce((all, num) => all + num, 0));
  arr.push(Number(del));

  arr.splice(0, 1);
  res.push(arr.reduce((all, num) => all + num, 0));

  const [a, b] = res;
  console.log(a, b);
}

miniMaxSum([9, 5, 7, 1, 3]);
