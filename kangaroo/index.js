function kangaroo(x1, v1, x2, v2) {
  // Write your code here
  const arr1 = [];
  const arr2 = [];
  const length = Array.from(arguments).sort()[Array.from(arguments).length - 1];
  let state = 0;

  for (let i = 0; i <= length; i++) {
    arr1.push(x1 + v1 * i);
    arr2.push(x2 + v2 * i);
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]));
    if (arr1[i] == arr2[i]) state = 1;
  }
  return state == 1 ? "YES" : "NO";
}
