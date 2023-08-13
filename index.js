// Removing elements from an array.

const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// End
const last = digits.pop();
console.log(last);
console.log(digits);

// Beginning
const first = digits.shift();
console.log(first);
console.log(digits);

// Somewhere in the middle
digits.splice(4, 2);
console.log(digits);

// pop & shift method return the value they remove.
