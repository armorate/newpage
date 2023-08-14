// Spread operator.

const num1 = [3, 4, 5];
const num2 = [6, 7];

// Concatenation using spread operator
const num3 = [...num1, "a", ...num2];
console.log(num3);

const copy = [...num2];
console.log(copy);
