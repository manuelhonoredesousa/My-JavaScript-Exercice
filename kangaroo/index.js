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

// 0 2 5 3
const x1 = 0; //try also with this value to see if your code is working proprerlly* > 0 and with 14
const v1 = 3; //try also with this value to see if your code is working proprerlly* > 2 and with 4
const x2 = 4; //try also with this value to see if your code is working proprerlly* > 5 and with 98
const v2 = 2; //try also with this value to see if your code is working proprerlly* > 3 and with 2

console.log(kangaroo(x1, v1, x2, v2));
