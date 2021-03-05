import { Customer } from '../customer/customer';
import { IndividualCustomer } from '../customer/individual-customer';
import { IndividualVehicle } from '../vehicle/individual-vehicle';
import { Vehicle } from '../vehicle/vehicle';
import { MakeVehicleCustomerFactory } from './customer-vehicle-factory';

export class MakeIndividualVehicleCustomerFactory
  implements MakeVehicleCustomerFactory {
  makeCustomer(customerName: string): Customer {
    return new IndividualCustomer(customerName);
  }

  makeVehicle(vehicleName: string, customerName: string): Vehicle {
    const customer = this.makeCustomer(customerName);
    return new IndividualVehicle(vehicleName, customer);
  }
}
