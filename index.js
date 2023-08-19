// Ex- Write a programme to make an array for a given range by giving a min and max value.

function arrayFromRange(min, max) {
  let result = [];
  for (let i = min; i <= max; i++) {
    result.push(i);
  }
  return result;
}

console.log(arrayFromRange(3, 8));
