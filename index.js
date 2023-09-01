// Changing 'this'

// there are many ways to change what this refers to inside an mehtods function, the preferred way is using arraw function.

// using another varible
const fun = {
  name : 'red',
  tags : ['a', 'b', 'c'],
  showtags() {
    let that = this;  // here that refers to what this is referring now
    this.tags.forEach(function(tags) {
      console.log(that.name, tags);
      }
    )
  }
};

fun.showtags();

// using bind method
const fun1 = {
  name : 'blue',
  tags : ['a','b','c'],
  showtags() {
    this.tags.forEach( function(tags) {
      console.log(this.name, tags);
    }.bind(this));
  }
}

fun1.showtags();

// using arraw function
const fun2 = {
  name : 'green',
  tags : ['a', 'b','c'],
  showtags() {
    this.tags.forEach(tags => console.log(this.name, tags)) } // inside an arrow function this refers to the inherited value of this from parent object
}

fun2.showtags();