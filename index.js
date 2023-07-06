// Write a programme to log stars in a given number.

logStars(17);
function logStars(num) {
  for (let i = 1; i <= num; i++) {
    let bar = "";
    for (let j = 1; j <= i; j++) bar += "*";
    console.log(bar);
  }
}
