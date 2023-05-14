// write a function to find oreantation of image.

let op = imageOr(448, 574);
console.log("image is " + op);

function imageOr(width, height) {
  if (width > height) return "landscape.";
  else if (width < height) return "vertical.";
  else return "square.";
}
