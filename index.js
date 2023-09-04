// Write a programme to sum arguments and sum array as arguments.

function sum(...items) {
  return items.reduce((a,b) => a + b);
}

console.log(sum(3,4,55,4));

function sumArray() {
  if(arguments.length == 1 && Array.isArray(arguments[0]));
  arguments = [...arguments[0]];
  return arguments.reduce((a,b) => a + b);
}

console.log(sumArray([3,2,5]));