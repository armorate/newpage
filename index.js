// Object Stuff
// initializing a variable using const does'nt mean it's content can not be modified, it means that that specific variable name can not be re-assigned.

const rectangle = { height: 30 };

rectangle.width = 10; // to add
rectangle.area = function () {
  let i = rectangle.height * rectangle.width;
  console.log(i);
};

delete rectangle.area; //  to delete

console.log(rectangle);
