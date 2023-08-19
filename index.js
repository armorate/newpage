// mapping elements from an array

const num = [2, -2, 4, 3];

const item = num.filter((x) => x > 0).map((x) => ({ value: x }));

const item1 = num.map((x) => "<li>" + x + "</li>");
const item2 = item1.join(" ");

console.log(item);
console.log("<ul>" + item2 + "</ul>");
