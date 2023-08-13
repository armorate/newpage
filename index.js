// Adding elements at different positions in an array.

const digits = [3, 5, 6];

// End
digits.push(7, 8);

// Beginning
digits.unshift(1, 2);

// Middle array.splice(start-index, no.-of-items-to-be-deleted, new-item, new-item , ---)
digits.splice(3, 0, 4);

console.log(digits);
