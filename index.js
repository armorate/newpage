// Defining an object using factory function.

function greet(name, age) {
  return {
    name,
    age,
    greetPerm() {
      let i = age >= 18 ? "allowed" : "prohibited";
      console.log("Hi " + name + ", Your entry to the club is " + i + ".");
    },
  };
}

const person02 = greet("Jason", 37);
person02.greetPerm();
