import { MakeEnterpriseVehicleCustomerFactory } from './factories/enterprise-customer-vehicle-factory';
import { MakeIndividualVehicleCustomerFactory } from './factories/individual-customer-vehicle-factory';

const enterpriseFactory = new MakeEnterpriseVehicleCustomerFactory();
const individualFactory = new MakeIndividualVehicleCustomerFactory();

const car1 = enterpriseFactory.makeVehicle('Fusca', 'João');
const car2 = individualFactory.makeVehicle('Celta', 'Helena');

car1.pickUp();
car2.pickUp();
