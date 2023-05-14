// write a function that takes two numbers and returns the maximum of the two.

let op = max(8, 8);
console.log(op);

function max(x, y) {
  if (x > y) {
    return x;
  } else if (y > x) {
    return y;
  } else if (x === y) {
    return "Both the given values are equal.";
  } else {
    return "I don't know";
  }
}
