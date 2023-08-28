// Arguments object in functions - every function has and argument object, which contains the argements while calling the function.

function add() {
  let x = 0;
  console.log(arguments);
  for(let y of arguments)
    x += y;
  return x;
}

console.log(add(3,5,2,4));