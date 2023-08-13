// Emptying an array.

let num = [3, 5, 3, 44, 2];
let another = num; // We need to reference the num variable to another variable so that after emtying the num variable it does'nt get automatically deleted by the garbage collector.

// Solution 1
// num = [];

// Solution 2
// num.length = 0;

// Solution 3
// num.splice(0, num.length);

// Solution 4
// while (num.length > 0) num.pop();

console.log(num);
console.log(another);
