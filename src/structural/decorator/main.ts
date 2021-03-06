import { ProductCustomizationDecorator } from './product/product-customization-decorator';
import { ProductDecorator } from './product/product-decorator';
import { ProductStampDecorator } from './product/product-stamp-decorator';
import { TShirt } from './product/t-shirt';

const tShirt = new TShirt();
const decoratedTShirt = new ProductStampDecorator(tShirt);
const customizedTShirt = new ProductCustomizationDecorator(tShirt);

console.log(tShirt.getPrice(), tShirt.getName());
console.log(decoratedTShirt.getPrice(), decoratedTShirt.getName());
console.log(customizedTShirt.getPrice(), customizedTShirt.getName());
