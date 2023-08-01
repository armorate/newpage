// Value vs Reference types
// in primitive/value type the memory address of variable and data is same unlike reference type where the memort addresses of variable and data are different.
// for Primitive/Value type
let x = 20;

function increment(num) {
  num++;
}

increment(x); // here in the function, parameter num is assigned a copy of the value of x, which is now independent of x's actual value
console.log(x); // Primitive/value types are copied by their value

// for Reference type
let obj1 = { y: 30 };

function incrementobj(obj) {
  obj.y++;
}

incrementobj(obj1); // here in the function, parameter obj is assigned the reference of obj1, which means they are holding the same mamery address value
console.log(obj1.y); // Reference/Object type are copied by their reference (address in the memory)
