// Ex- Write a programme to make a function that removes the given elements from an array.

const num = [3, 4, 2, 6, 7];

function except(array, exceptArray) {
  let result = [];
  for (let x of array) if (!exceptArray.includes(x)) result.push(x);
  return result;
}

console.log(except(num, [3, 2]));
