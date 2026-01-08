const hello = require('./libHello');

hello.sayHello();
console.log("Person Name:", hello.person.name);
console.log("Cube of 3:", hello.cube(3));
console.log("Add 5 + 7:", hello.add(5, 7));
console.log("Status:", hello.status);