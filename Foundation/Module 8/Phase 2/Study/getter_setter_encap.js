class Person {
  #name;
  constructor(name) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }

  set name(UpdateName) {
    this.#name = UpdateName;
  }
}

const p1 = new Person("Ahad");
console.log(p1.name);

p1.name = "Nabhan";
console.log(p1.name);
