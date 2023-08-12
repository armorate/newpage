// Create a blogspot object using object literal syntax with following properties:
// title, body, author, views, comments(author, body), isLive

let blogspot = {
  title: "Health",
  body: "Berries good, sugar bad",
  author: "armorate",
  views: 334,
  comments: [
    { author: "a", body: "b" },
    { author: "c", body: "d" },
  ],
  isLive: false,
};

console.log(blogspot);
