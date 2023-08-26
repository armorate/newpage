// Ex- Write a programme to return the largest element of an array.

const num = [3, 4, 2, 6, 4, 7];
console.log(num);

function getMaxValue(array) {
  if (array.length === 0) return undefined;
  let element = array[0];
  for (let x of array) if (element < x) element = x;
  return element;
}

console.log(getMaxValue(num));


// using reduce() method
function getMax(arr){
  if(arr.length === 0) return undefined;
  return arr.reduce((a,b)=> (a > b) ? a : b);
}

console.log(getMax(num));