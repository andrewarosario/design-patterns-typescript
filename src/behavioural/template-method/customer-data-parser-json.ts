import { CustomerDataParser } from './customer-data-parser';
import { promises } from 'fs';
import { CustomerData } from './customer-data';

export class CustomerDataParserJson extends CustomerDataParser {
  protected async parseData(): Promise<CustomerData[]> {
    const rawData = await promises.readFile(this.filePath);

    const data = JSON.parse(rawData.toString());

    const customerData: CustomerData[] = [];

    for (const customer of data) {
      const { name, age, cpf } = customer;
      customerData.push({ name, age, cpf });
    }

    return customerData;
  }

  protected hook(): void {
    console.log('O hook foi executado');
  }
}
