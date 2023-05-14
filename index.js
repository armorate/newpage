// Loops => there many kinds of loops in js.

// for-in loop

// this loop used the display elements of array or objects.

let stuff = { name: "Tammy", amount: 54, weight: 53 };

for (let key in stuff) {
  console.log(key, stuff[key]);
}

// In for-in loops a key is generated after each iteration, here which is stored in the key variable.
