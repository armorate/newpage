// Cloning an object

const person = {
  name: "Sam",
  age: 33,
  adult: function () {
    return person.age >= 18 ? "True" : "False";
  },
};

// using for-in loop
// const obj1 = {};
// for (key in person) {
//   obj1[key] = person[key];
// }

// using assign
// const obj1 = { sex: "male" };
// Object.assign(obj1, person);
// or
// const obj1 = Object.assign({}, person);

// using Spread operator(shortest way)
const obj1 = { ...person };

console.log(obj1);
console.log(person.adult());
