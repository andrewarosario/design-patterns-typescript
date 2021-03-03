export interface Prototype {
  clone(): Prototype;
}

export class Person implements Prototype {
  public addressess: Address[] = [];
  constructor(public name: string, public age: number) {}

  clone(): Person {
    const newObj = new Person(this.name, this.age);
    newObj.addressess = this.addressess.map((item) => item.clone());
    return newObj;
  }

  addAddress(address: Address): void {
    this.addressess.push(address);
  }
}

export class Address implements Prototype {
  constructor(public street: string, public number: number) {}

  clone(): Address {
    return new Address(this.street, this.number);
  }
}

const address1 = new Address('Rua Tal', 1);
const person1 = new Person('Andrew', 26);
person1.addAddress(address1);
const person2 = person1.clone();

person1.addressess[0].street = 'Outra rua';

person2.name = 'Joao';
console.log(person1);
console.log(person1.name);
console.log(person1.addressess);

console.log(person2);
console.log(person2.name);
console.log(person2.addressess);
