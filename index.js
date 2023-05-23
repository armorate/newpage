// Write a programme to return addition of the numbers which are multiple of 3 and 5 between a given number.

console.log(sumMulti(15));

function sumMulti(limit) {
  let sum = 0;

  for (i = 0; i <= limit; i++) {
    if (i % 3 == 0) sum += i;
    if (i % 5 == 0) sum += i;
  }
  return sum;
}
