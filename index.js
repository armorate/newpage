// Let vs Var

// var - function-scoped
// let/const - block-scoped

function sayHi() {
  for(var i = 0; i < 5; i++){
    console.log('hi');
  }
  console.log(i); // here var i is accessible outside the block it was defined, var is a function scoped variable that means if you define a variable inside the function using var ketword it could be accessed anywhere inside that function.
}

sayHi();