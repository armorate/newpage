// Loops => there many kinds of loops in js.

// Continue and Break keywords

for (i = 3; i <= 9; i++) {
  if (i === 4) {
    continue; // continue skips the current iteration.
  }
  if (i % 4 === 0) {
    break; // break stops the loop.
  }
  console.log(i);
}
