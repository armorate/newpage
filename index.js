// Create an address object using factory function and constructor function

// using factory function
function createAddress1(name, zipCode) {
  return {
    name,
    zipCode,
    Country: "USA",
  };
}

const address1 = createAddress1("Samuel Gibson", 33824);

// using constructor function
function CreateAddress2(zipCode) {
  (this.city = "london"), (this.zipCode = zipCode), (this.Country = "UK");
}

const address2 = new CreateAddress2(11255);

// a function to log object's properties and values
function showAddress(obj) {
  for (let key in obj) {
    console.log(key, obj[key]);
  }
}

showAddress(address1);
showAddress(address2);
