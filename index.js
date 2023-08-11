// Create two functions, one to check if two objects have same elements and second to check if two objects are referencing to the same object.

// using constructor function
function CreateAddress(name, zipCode, country) {
  this.name = name;
  this.zipCode = zipCode;
  this.country = country;
}

const address1 = new CreateAddress("a", "b", "c");
const address2 = new CreateAddress("a", "b", "c");
const address3 = address1;

// to check if both objects have same properties
function areEqual(address1, address2) {
  return (
    address1.name == address2.name &&
    address1.zipCode == address2.zipCode &&
    address1.country == address2.country
  );
}

// to check if both objects are referencing the same object
function areSame(add1, add2) {
  return add1 === add2;
}

console.log(areEqual(address1, address2));

console.log(areSame(address1, address2));
console.log(areSame(address1, address3));
