// joining arrays

const num = [3, 2, 3, 55];
const joined = num.join("-"); // join method return an string.
console.log(joined);

// split method
const message = "This script";
const split1 = message.split("i"); // split returns an array.
const split2 = message.split(" ");
console.log(split1, split2);

const joined1 = split2.join("-");
console.log(joined1);
