// Local vs Global Scope of a variable/constant

let x = 'a';  // globally defined variable - accessible everywhere

function anon() { 
  let y = 'b';  // locally defined variable - accessible only inside this function
  if(true) {
    let z = 'c';  // locally defined variable - accessible only inside this if statement codeblock
  }
  console.log(z);
}

console.log(x);
console.log(y);
anon();