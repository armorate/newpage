let firstName = 'Raju';
let lastName = 'Rastogi';
console.log(firstName, lastName);

const birthYear = 1992;
//birthYear = 1995; /*this line would throw an error and after it execution will stop*/
console.log(birthYear);

// Objects
let personName = { 
    firstName: 'Ramesh', 
    lastName: 'Gopalachari'
    };
    /*there are two ways to reference objects properties 1. Dot Notation 2. Bracker Notation*/
console.log(
    personName.lastName, /* Dot Notation*/
    personName['firstName'] /* Bracket Notation*/
    );
