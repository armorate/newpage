// Arrow function - it can be used instead of a callback function(it's efficient and shortens the code).

const person = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
  { id: 3, name: "c" },
];

// let found = person.find(function (x) {
//   return x.id === 2;
// });

// using arrow function for the same code
let found = person.find((x) => x.id === 2);

console.log(found);
