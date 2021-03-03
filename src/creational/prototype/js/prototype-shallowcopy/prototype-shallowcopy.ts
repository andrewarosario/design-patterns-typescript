export interface Prototype {
  clone(): Prototype;
}

export class Person implements Prototype {
  public addressess: Address[] = [];
  constructor(public name: string, public age: number) {}

  clone(): Person {
    const newObj = Object.create(this);
    return newObj;
  }

  addAddress(address: Address): void {
    this.addressess.push(address);
  }
}

export class Address {
  constructor(public street: string, public number: number) {}
}

const address1 = new Address('Rua Tal', 1);
const person1 = new Person('Andrew', 26);
person1.addAddress(address1);
const person2 = person1.clone();

person1.addressess[0].street = 'Outra rua';

person2.name = 'Joao';
console.log(person2);
console.log(person2.name);
console.log(person2.addressess);
