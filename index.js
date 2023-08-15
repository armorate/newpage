// iterating an array.

const num = [4, 5, 3, 45, 23];

// using for loop
for (key of num) {
  console.log(key);
}

// using forEach method
num.forEach((num, index) => console.log(index, num));
