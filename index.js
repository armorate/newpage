// create an object circle with properties radius and area, where area is a read only propertie.

const circle = {
  radius : 5,
  get area() {
    return Math.PI * this.radius * this.radius;
  }
};

console.log(circle.area);