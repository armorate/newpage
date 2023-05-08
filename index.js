// Logical Operator with Non-boolean values

// if we compare a boolean false and a non-boolean value, then we will get the non-boolean value as true*.
// Some non-boolean values are considered false in javascript which are :-  undefined, null, 0, false, '', NaN

let op1 = false || true;
console.log(op1);

let op2 = false || 4;
console.log(op2);

let op3 = false || "tej";
console.log(op3);

let op4 = 098 || true;
console.log(op4);

let op5 = null || true;
console.log(op5);

let op6 = false || NaN;
console.log(op6);
// in op6 it returns NaN, because it starts from left and skips false because its false and returns NaN.
