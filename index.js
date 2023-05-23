// Write a programme for a grade system for student's marks.

result = [95, 85, 17, 98];
console.log("Grade : " + gradeSys(result));

function gradeSys(result) {
  let sum = 0;
  for (let marks of result) {
    sum += marks;
  }
  sum = sum / result.length;
  if (sum < 60) return "F";
  else if (sum < 70) return "D";
  else if (sum < 80) return "C";
  else if (sum < 90) return "B";
  else return "A";
}
