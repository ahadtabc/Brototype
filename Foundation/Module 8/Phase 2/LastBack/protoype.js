// A Prototype is an object from which other objects inherit properties and methods. It enables
// JavaScript's prototype-based inheritance,
// allowing multiple objects to share the same methods without duplicating them.

// A prototype is an object that acts as a template for other objects.

function Person(name) {
  this.name = name;
}

Person.prototype.myVariable = function () {
  console.log(`Hello ${this.name}`);
};

let p1 = new Person("Ahad");
let p2 = new Person("Akhil");

p1.myVariable();
p2.myVariable();
