import { Seller } from './seller';
import { SellerProduct } from './seller-product';

export class Mediator {
  private sellers: Seller[] = [];

  addSeller(...sellers: Seller[]): void {
    sellers.forEach((seller) => {
      this.sellers.push(seller);
      seller.setMediator(this);
    });
  }

  buy(id: string): SellerProduct | void {
    let product;
    for (const seller of this.sellers) {
      product = seller.sell(id);
      if (product) {
        console.log('Comprou produto ' + product.name);
        return product;
      }
    }

    console.log('Não encontrei nenhum produto com o id ' + id);
    return;
  }

  showProducts(): void {
    this.sellers.forEach((seller) => seller.showProducts());
  }
}
