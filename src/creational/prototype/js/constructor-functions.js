function Person(name, lastName, age) {
  this.name = name;
  this.lastName = lastName;
  this.age = age;
}

const personPrototype = {
  name: 'Andrew',
  lastName: 'Rosario',
  age: 26,

  fullName() {
    return `${this.name} ${this.lastName}`;
  },
};

Person.prototype = Object.create(personPrototype);
Person.prototype.constructor = Person;

function SubPerson(name, lastName, age) {
  Person.call(this, name, lastName, age);
  this.fromSubClass = 'OLÁ';
}

SubPerson.prototype = Object.create(Person.prototype);
SubPerson.prototype.constructor = SubPerson;

const person1 = new Person('Ruy', 'Rosario', 26);
console.log(person1);
console.log(person1.fullName());

const person2 = new SubPerson('Helena', 'Vieira', 20);
console.log(person2);
console.log(person2.fullName());
