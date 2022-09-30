function sockMerchant(n, ar) {
  // Write your code here
  const noRepeat = [...new Set(ar)];
  const newAr = noRepeat.map((color) => ar.filter((thisColot) => thisColot == color).length);
  const res = newAr.map((num) => Math.trunc(num / 2));
  return res.reduce((all, num) => all + num, 0);
}

const n = 9;
const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];

console.log(sockMerchant(n, ar));
