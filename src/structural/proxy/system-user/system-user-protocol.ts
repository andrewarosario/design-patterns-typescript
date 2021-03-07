export type SystemUserAddressProtocol = {
  street: string;
  number: number;
};

export interface SystemUserProtocol {
  firstName: string;
  lastName: string;
  getAddresses(): Promise<SystemUserAddressProtocol[]>;
}
