// Basic Error handling - try & catch

const person = {
  firstName : 'Nick',
  lastName : 'Varagera',
  set fullName(value) {
    if(typeof value !== 'string')
      throw new Error('Enter a string');

    const parts = value.split(' ');
    if(parts.length !== 2)
      throw new Error('Enter first and last name');

    this.firstName = parts[0];
    this.lastName = parts[1];
  }
}

try {
  person.fullName = '47e';
}

catch(e) {
  alert(e);
}

console.log(person);