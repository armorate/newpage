// Just an Object.

let obj1 = {
  name: "Aloo",
  age: 14,
  sex: "female",
  address: { state: "Alaska", country: "USA" },
  voter: function () {
    let i = obj1.age;
    let j = i >= 18 ? "Yes" : "No";
    console.log(j);
  },
};

obj1.voter();
