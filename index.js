// implement error handling using try, catch

try {
  const numbers = [2, 3, 4, 5];

  const count = countOccurences(776,5);
  console.log(count);
}

catch(e) {
  console.log(e.message);
}

function countOccurences(array, searchElement) {
  if(!Array.isArray(array))
    throw new Error('Argument is not an array.');

  return array.reduce((accumulator, current) => {
  const occurrence = (current === searchElement) ? 1 : 0;
  return accumulator + occurrence;}, 0);
}

