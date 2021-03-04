import { CarFactory } from './factories/car-factory';
import { randomVehicleAlgorithm } from './main/random-vehicle-algorithm';
import { randomNumbers } from './utils/random-numbers';

const customerNames = ['Ana', 'Joana', 'João', 'José'];
const carFactory = new CarFactory();

for (let i = 0; i < 10; i++) {
  const vehicle = randomVehicleAlgorithm();
  const name = customerNames[randomNumbers(customerNames.length)];
  vehicle.pickUp(name);
  vehicle.stop();
  const newCar = carFactory.pickUp(name, `CARRO ${randomNumbers(100)}`);
  newCar.stop();
  console.log('---');
}
