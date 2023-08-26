// Ex- Write a programme to make a function that counts occurence of an element inside an array.

const num = [3, 4, 2, 6, 4, 7];

function countOccurences(array, element) {
  let occurence = 0;
  for (let x of array) if (x === element) occurence++;
  return occurence;
}

console.log(num);

console.log(countOccurences(num, 7));
