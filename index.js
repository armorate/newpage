// Finding reference type elements in an array.

const person = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
  { id: 3, name: "c" },
];

// to return element
let found = person.find(function (x) {
  return x.id === 2;
});

console.log(found);

// to return element's index
let found2 = person.findIndex(function (x) {
  return x.name === "a";
});

console.log(found2);
