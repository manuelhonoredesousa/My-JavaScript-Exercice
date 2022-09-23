function countApplesAndOranges(a, b, s, t, apples, oranges) {
  // Write your code here
  const result = [0, 0];

  apples.forEach((apple) => {
    if (apple + a >= s && apple + a <= t) result[0]++;
  });

  oranges.forEach((orange) => {
    if (orange + b >= s && orange + b <= t) result[1]++;
  });

  console.log(result[0]);
  console.log(result[1]);
}

const a = 4;
const b = 12;
const s = 7;
const t = 10;

const apples = [2, 3, -4];
const oranges = [3, -2, -4];

countApplesAndOranges(a, b, s, t, apples, oranges);
