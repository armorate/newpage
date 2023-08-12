// Create an unpublished blogspot object using constructor function with following properties:
// title, body, author, views, comments, isLive

let blogspot = new CreateBlogspot("a", "b", "c");

function CreateBlogspot(title, author, body) {
  this.title = title;
  this.author = author;
  this.body = body;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}

console.log(blogspot);
