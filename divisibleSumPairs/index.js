function divisibleSumPairs(n, k, ar) {
  // Write your code here
  let res = [];
  let control = [];

  ar.forEach((elementA) =>
    ar.forEach((elementB) =>
      control.push(Math.trunc((elementA + elementB) / k))
    )
  );

  const verify = control.sort((a, b) => control.filter((v) => v === a).length - control.filter((v) => v === b).length).pop()
  
  for (let i = 0; i < ar.length; i++) {
    const A = ar[i];

    for (let j = 0; j < ar.length; j++) {
      const B = ar[j];

      console.log(i, j);
      // console.log(A, B, " = ", A + B);
      console.log((((A+B)/k)*2)/k==1);
      // console.log(verify);
      console.log("--------------------");

      // reference.push((A+B)/k)

      if ((A + B) / k == 1 || (A + B) / k == k /* || Math.trunc((A + B) / k) == verify */) {
        const compareArr = [i, j].reverse();

        if (
          !res
            .map((values) =>
              values.every((value, index) => value === compareArr[index])
            )
            .some((value) => value == true)
        )
          res.push([i, j]);
      }
    }
  }
  console.log(res);
  // return res.length;
}

// const n = 6;
// const k = 3;
// const ar = [1, 3, 2, 6, 1, 2];
//5

// const n = 2;
// const k = 2;
// const ar = [8, 10];
//1

// const n = 6;
// const k = 3;
// const ar = [1, 3, 2, 6, 1, 2];
//4

 const n = 5;
  const k = 2;
  const ar = [5, 9, 10, 7, 4];
  // The return must be = 4

console.log(divisibleSumPairs(n, k, ar));





// -------------------------------

// function divisibleSumPairs(n, k, ar) {
//   // Write your code here
//   let res = [];
//   let control = [];

//   ar.forEach((elementA) =>
//     ar.forEach((elementB) =>
//       control.push(Math.trunc((elementA + elementB) / k))
//     )
//   );

//   const verify = control
//     .sort(
//       (a, b) =>
//         control.filter((v) => v === a).length -
//         control.filter((v) => v === b).length
//     )
//     .pop();

//   for (let i = 0; i < ar.length; i++) {
//     const A = ar[i];

//     for (let j = 0; j < ar.length; j++) {
//       const B = ar[j];

//       if (
//         (A + B) / k == 1 ||
//         (A + B) / k == k ||
//         Math.trunc((A + B) / k) == verify
//       ) {
//         const compareArr = [i, j].reverse();

//         if (
//           !res
//             .map((values) =>
//               values.every((value, index) => value === compareArr[index])
//             )
//             .some((value) => value == true)
//         )
//           res.push([i, j]);
//       }
//     }
//   }
//   return res.length;
// }

// // const n = 6;
// // const k = 3;
// // const ar = [1, 3, 2, 6, 1, 2];
// //The return must be = 5

// // const n = 2;
// // const k = 2;
// // const ar = [8, 10];
// //The return must be =  1

// // const n = 5;
// // const k = 2;
// // const ar = [5, 9, 10, 7, 4];
// //The return must be = 4

// const n = 6;
// const k = 3;
// const ar = [1, 3, 2, 6, 1, 2];
// // The return must be = 5

// console.log(divisibleSumPairs(n, k, ar));
