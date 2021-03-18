import { NewDiscount } from './shopping-cart/discount-strategies/new-discount';
import { ECommerceShoppingCart } from './shopping-cart/ecommerce-shopping-cart';

const shoppingCart = new ECommerceShoppingCart();
// shoppingCart.discount = new DefaultDiscount();
shoppingCart.discount = new NewDiscount();
shoppingCart.addProduct({ name: 'Produto 1', price: 50 });
shoppingCart.addProduct({ name: 'Produto 2', price: 50 });
shoppingCart.addProduct({ name: 'Produto 3', price: 50 });
console.log('total: ', shoppingCart.getTotal());
console.log('total com desconto: ', shoppingCart.getTotalWithDiscount());
