import { Customer } from '../customer/customer';
import { EnterpriseCustomer } from '../customer/enterprise-customer';
import { EnterpriseVehicle } from '../vehicle/enterprise-vehicle';
import { Vehicle } from '../vehicle/vehicle';
import { MakeVehicleCustomerFactory } from './customer-vehicle-factory';

export class MakeEnterpriseVehicleCustomerFactory implements MakeVehicleCustomerFactory {
  makeCustomer(customerName: string): Customer {
    return new EnterpriseCustomer(customerName);
  }

  makeVehicle(vehicleName: string, customerName: string): Vehicle {
    const customer = this.makeCustomer(customerName);
    return new EnterpriseVehicle(vehicleName, customer);
  }
}
