// Write a programme to count truthy values in an array.

let array = [false, "fd", 45, null, 0, true, "number", NaN, 99, 38, " ", ""];

countTruthy(array);

function countTruthy(array) {
  let i = 0;
  for (let key of array) {
    if (key) i++;
  }
  console.log(i);
}
