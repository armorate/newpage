// Creating an object using Constructor function.
// while creating an object using constructor function we should use pascal notation for naming the function.

function Greet(name) {
  this.name = name;
  this.greet = function () {
    console.log("Hi, " + name + "!");
  };
}

const person01 = new Greet("Samantha");
person01.greet();
