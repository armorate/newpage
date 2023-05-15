// Write a programme to show only the string elements of an object.

let movie = {
  name: "fiction",
  year: 1997,
  director: "andy",
  runtime: 97,
  rating: 4.8,
};

stringValue(movie);

function stringValue(movie) {
  for (let key in movie) {
    if (typeof movie[key] == "string") console.log(key, movie[key]);
  }
}
