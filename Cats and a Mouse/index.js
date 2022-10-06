let q = [1, 2, 3];
let g = [1, 3, 2];

function catAndMouse(x, y, z) {
  const catA = Math.abs(x - z);
  const catB = Math.abs(y - z);

  if (Math.min(catA, catB) == catA && Math.min(catA, catB) == catB) {
    return "Mouse C";
  } else if (Math.min(catA, catB) == catA) {
    return "Cat A";
  } else if (Math.min(catA, catB) == catB) {
    return "Cat B";
  }
}

console.log(catAndMouse(9, 4, 2));
