// getters & setters

// get = used to access properties
// set = used to modify ot mutate the propertie

const person = {
  firstName : 'Alpa',
  lastName : 'Cino',
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
}

person.fullName = 'De Weste';

console.log(person);