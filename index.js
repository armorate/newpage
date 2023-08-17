// checking elements of an array

const num = [4, 3, -6, 7, 5];

// every() - exits as soon as condition is false
const allPositive = num.every(function (value) {
  return value >= 0;
});

console.log(allPositive);

// some() - exits as soon as condition is true
const atLeastOnePositive = num.some(function (value) {
  return value >= 0;
});

console.log(atLeastOnePositive);
