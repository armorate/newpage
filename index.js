// The This Keyword - this keyword references to the object that is exetuting the current function.

// method - object => calling the this keyword inside an objects function/method return that object.
// function - global(window, global) => calling this keyword globally or inside a non-method function returns the global object in node and window object in browser.
// *calling this keyword inside an constructor function using new keyword returns an empty object.

function logg() {
  console.log(this);  // returns window object
}

logg();

const rock = {
  title : 'camel',
  tags : ['green', 'red', 'angry'],
  age() {
    console.log(this);  // returns methods object
  },
  color() {
    this.tags.forEach(function(tag) { 
      console.log(this, tag); // here it's not an method, that is why it returns window object
    });
  }
}

rock.age();

rock.color();