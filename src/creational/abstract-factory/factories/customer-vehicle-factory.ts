import { Customer } from '../customer/customer';
import { Vehicle } from '../vehicle/vehicle';

export interface MakeVehicleCustomerFactory {
  makeCustomer(customerName: string): Customer;
  makeVehicle(vehicleName: string, customerName: string): Vehicle;
}
