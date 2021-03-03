const personPrototype = {
  name: 'Andrew',
  lastName: 'Rosario',
  age: 26,

  fullName() {
    return `${this.name} ${this.lastName}`;
  },
};

const anotherPerson = Object.create(personPrototype);
anotherPerson.name = 'Ruy';
console.log(anotherPerson.name);
console.log(anotherPerson.fullName());
