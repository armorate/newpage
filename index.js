// Write a programme to print numbers and their nature(odd/even).

printNumbers(5);

function printNumbers(toNum) {
  for (i = 0; i <= toNum; i++) {
    let type = i % 2 === 0 ? "Even" : "Odd";
    console.log(i + " " + type);
  }
}
