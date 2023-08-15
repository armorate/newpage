// sorting arrays

const num = [4, 3, 6, 7, 5];

console.log(num.reverse());
console.log(num.sort());

const objarr = [
  { id: 1, name: "apple" },
  { id: 2, name: "mango" },
  { id: 3, name: "banana" },
];
console.log(
  objarr.sort(function (a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  })
);
