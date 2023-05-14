// write a function to fizzbuzz
// Divisible by 3 return fizz
// Divisible by 5 return buzz
// Divisible by both 3 and 5 return fizzbuzz
// Divisible by none then return the number
// If not a number then return Not A Number

let op = fizzBuzz(45000);
console.log(op);

function fizzBuzz(number) {
  if (isNaN(number)) return "Not A Number";
  else if (number % 15 === 0) return "fizzBuzz";
  else if (number % 3 === 0) return "fizz";
  else if (number % 5 === 0) return "Buzz";
  else return number;
}
