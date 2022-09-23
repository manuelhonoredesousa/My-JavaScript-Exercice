function compareTriplets(a, b) {
  let point = [0, 0];

  for (let i = 0; i < a.length; i++) {
    const elementA = a[i];
    const elementB = b[i];

    if (elementA > elementB) point[0]++;
    else if (elementA < elementB) point[1]++;
  }
  return point
}

const a = [5, 6, 7];
const b = [3, 6, 10];

console.log(compareTriplets(a, b));
