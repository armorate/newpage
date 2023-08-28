// Hoisting - hoisting is process that happens when we run the javascript code, at the runtime the function declarations get moved to the top of the program and are executed first.

// function declaration

hello();

function hello(){
  console.log('hello');
}

// function expression

hola();

let hola = function() {
  console.log('hola');
}