// Write a programme for a grade system for student's marks(taking marks in object data type).

result = {
  Maths: 34,
  Science: 63,
  English: 93,
  SocialScience: 79,
  Spanish: 4,
};

console.log(gradeSys(result));

function gradeSys(object) {
  let i = 0;
  for (let key in object) {
    i += object[key];
  }
  console.log("Total Marks : " + i);
  let j = i / Object.keys(object).length;
  console.log("Average : " + j);
  if (j < 40) return "F";
  if (j < 60) return "C";
  if (j < 80) return "B";
  else if (j <= 100) return "A";
  else return "enter valid result data!";
}
