// reducing an array

const num = [3, 4, 2, 6, -2];

// let sum = 0;
// for (let x of num) sum += x;

const sum = num.reduce((x, y) => (x += y));

console.log(sum);
