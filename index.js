// Ex- Write a programme to make a function that moves elements inside an array.

const num = [3, 4, 2, 6, 7];

function move(array, take, leave) {
  const result = array.splice(take, 1);
  array.splice(leave, 0, result[0]);
  return array;
}
console.log(num);

console.log(move(num, 2, 0));
