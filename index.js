// Ex- Write a programme to make a function that does the job of includes() method.

const num = [3, 4, 2, 6, 7];

function includes(array, findElement) {
  for (let i of array) if (i == findElement) return true;
  return false;
}

console.log(includes(num, 1));
