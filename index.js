// Some of the built-in Objects in JavaScript

// Math - The Math object contains static properties and methods for mathematical constants and functions.

console.log("Pi = " + Math.PI);
let x1 = Math.sqrt(7);
console.log(`SQRT =  ` + x1);
let x2 = Math.floor(5.126);
console.log(x2);

// String - The String object is used to represent and manipulate a sequence of characters.

// Strings can be created as primitives, from string literals, or as objects, using the String() constructor//

// String Primitives
const x11 = "Everest Is big.";
// String Objects
const x12 = new String("Really high!");

const x13 = x11 + " \n" + x12;
console.log(x13);
const x14 = x11.charAt(12);
console.log(x14);
console.log(x12.toUpperCase());

// Date - JavaScript Date objects represent a single moment in time in a platform-independent format.

let x21 = new Date(2002, 9, 23, 11, 31);
console.log(x21);
console.log(x21.getUTCDate());
