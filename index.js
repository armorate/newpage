// Make an address object and log it's properties and values(STREET, CITY, ZIPCODE).

const address = { city: "Memphis", street: 45, zipcode: 43994 };

function showAddress(obj) {
  for (let key in obj) {
    console.log(key, obj[key]);
  }
}

showAddress(address);
